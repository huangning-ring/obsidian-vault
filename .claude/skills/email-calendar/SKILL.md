---
name: email-calendar
description: >
  Email calendar manager — scans QQ/foxmail IMAP for event/seminar emails,
  extracts activity details, creates .ics files, and updates
  calendar/Email-Events.md with proper date-based classification.
  Triggers when user asks to "抓取邮件日程" "更新日程表" "check email events"
  "scan emails for events" or explicitly references calendar/Email-Events.md.
---

# Email Calendar — 邮件日程管理

Scans QQ mail via IMAP, extracts event-related emails, creates .ics files,
and updates `calendar/Email-Events.md` with proper classification.

## Trigger Scenarios

- "抓取邮件日程" / "更新日程表" / "scan emails for events"
- User references `calendar/Email-Events.md`
- Explicit request to check emails for upcoming activities

## IMAP Connection

- Server: `imap.qq.com:993` (SSL)
- Account: `huangning.ring@foxmail.com`
- Auth code: `icjrnupcfxbbdcfj`
- Use Python `imaplib` with SSL

## Processing Steps

### 1. Identify Last Fetch Date

Read `calendar/Email-Events.md` bottom line for `*提取来源: IMAP + AI 分析邮件 | YYYY-MM-DD*`.
Extract the date. Search IMAP for emails SINCE that date.

### 2. Filter Event-Relevant Emails

Use keyword matching on subject + sender + body:
`seminar`, `lecture`, `talk`, `meeting`, `conference`, `workshop`, `deadline`,
`payment`, `register`, `invitation`, `tutorial`, `colloquium`, `symposium`,
`webinar`, `genetics`, `royal college`, `edinburgh`, `event`, `save the date`,
`CRH`, `CVS`, `CIR`, `EBR`, `MITO`, `Physiological`, `Hodgkin`, `Pickford`,
`Clinical Genomes`, `OHGE`, `IGC`, `LivSCt`, `acceptance`, `booking`,
`order ref`, `receipt`, `invoice`

Also match known senders: `vicky.macrae@roslin.ed.ac.uk`, `D.Toddie-Moore@ed.ac.uk`,
`X.Tan-22@sms.ed.ac.uk`, `theteam@genetics.org.uk`, Eventbrite addresses.

### 3. Parse Event Details

For each matched email, extract:
- **Date** (DTSTART) — parse from subject/body, prefer explicit dates
- **Time** (DTEND) — infer from context (seminars usually 1hr, full-day events)
- **Summary** — seminar title or event name
- **Description** — speaker, host, abstract, registration info
- **Location** — venue, room, online link
- **Attachments** — note if any .ics/.pdf program attached

### 4. Create .ics Files

Group events by date range into `.ics` files:
- Naming: `calendar/upcoming-YYYYMMDD-YYYYMMDD.ics`
- Include full VEVENT blocks with UID, DTSTART, DTEND, SUMMARY, DESCRIPTION, LOCATION
- Use `STATUS:TENTATIVE` for future events, `STATUS:CONFIRMED` for past

### 5. Update Email-Events.md

**Classification rules:**
- Event date < current date → **已过** list, sorted by date descending
- Event date ≥ current date → **即将到来** list, sorted by date ascending
- Sync counts: `**即将到来 (N)**` and **已过 (M)**
- Update fetch date at bottom: `*提取来源: IMAP + AI 分析邮件 | YYYY-MM-DD*`

**Link rules:**
- Each event references its correct .ics file
- Future events → `upcoming-YYYYMMDD-YYYYMMDD.ics`
- Past events → corresponding dated .ics file
- Do NOT point all events to one generic file

### 6. Preserve Existing Entries

Existing events already in the file should NOT be removed or duplicated.
Only add NEW events found in the new email batch.

## Safety

- Never modify `.obsidian/` directory
- Always use relative paths from vault root
- Backup before overwriting (append `.bak` timestamp)
- Validate .ics files with `BEGIN:VCALENDAR` / `END:VCALENDAR` wrapper
