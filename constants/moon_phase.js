// All Dates and Times are in GMT
// Phase 0 = New Moon
// Phase 1 = FirstQuarter WaxingCrescent
// Phase 2 = Full Moon
// Phase 3 = LastQuarter WaningCrescent
const MOON_PHASE_DATA = {
  2024: [
    { Date: "2024-01-04T03:30:00Z", Phase: 3 },
    { Date: "2024-01-11T11:57:00Z", Phase: 0 },
    { Date: "2024-01-18T03:52:00Z", Phase: 1 },
    { Date: "2024-01-25T17:54:00Z", Phase: 2 },
    { Date: "2024-02-02T23:18:00Z", Phase: 3 },
    { Date: "2024-02-09T22:59:00Z", Phase: 0 },
    { Date: "2024-02-16T15:01:00Z", Phase: 1 },
    { Date: "2024-02-24T12:30:00Z", Phase: 2 },
    { Date: "2024-03-03T15:23:00Z", Phase: 3 },
    { Date: "2024-03-10T09:00:00Z", Phase: 0 },
    { Date: "2024-03-17T04:11:00Z", Phase: 1 },
    { Date: "2024-03-25T07:00:00Z", Phase: 2 },
    { Date: "2024-04-02T03:15:00Z", Phase: 3 },
    { Date: "2024-04-08T18:21:00Z", Phase: 0 },
    { Date: "2024-04-15T19:13:00Z", Phase: 1 },
    { Date: "2024-04-23T23:49:00Z", Phase: 2 },
    { Date: "2024-05-01T11:27:00Z", Phase: 3 },
    { Date: "2024-05-08T03:22:00Z", Phase: 0 },
    { Date: "2024-05-15T11:48:00Z", Phase: 1 },
    { Date: "2024-05-23T13:53:00Z", Phase: 2 },
    { Date: "2024-05-30T17:13:00Z", Phase: 3 },
    { Date: "2024-06-06T12:38:00Z", Phase: 0 },
    { Date: "2024-06-14T05:18:00Z", Phase: 1 },
    { Date: "2024-06-22T01:08:00Z", Phase: 2 },
    { Date: "2024-06-28T21:53:00Z", Phase: 3 },
    { Date: "2024-07-05T22:57:00Z", Phase: 0 },
    { Date: "2024-07-13T22:49:00Z", Phase: 1 },
    { Date: "2024-07-21T10:17:00Z", Phase: 2 },
    { Date: "2024-07-28T02:51:00Z", Phase: 3 },
    { Date: "2024-08-04T11:13:00Z", Phase: 0 },
    { Date: "2024-08-12T15:19:00Z", Phase: 1 },
    { Date: "2024-08-19T18:26:00Z", Phase: 2 },
    { Date: "2024-08-26T09:26:00Z", Phase: 3 },
    { Date: "2024-09-03T01:55:00Z", Phase: 0 },
    { Date: "2024-09-11T06:05:00Z", Phase: 1 },
    { Date: "2024-09-18T02:34:00Z", Phase: 2 },
    { Date: "2024-09-24T18:50:00Z", Phase: 3 },
    { Date: "2024-10-02T18:49:00Z", Phase: 0 },
    { Date: "2024-10-10T18:55:00Z", Phase: 1 },
    { Date: "2024-10-17T11:26:00Z", Phase: 2 },
    { Date: "2024-10-24T08:03:00Z", Phase: 3 },
    { Date: "2024-11-01T12:47:00Z", Phase: 0 },
    { Date: "2024-11-09T05:55:00Z", Phase: 1 },
    { Date: "2024-11-15T21:28:00Z", Phase: 2 },
    { Date: "2024-11-23T01:28:00Z", Phase: 3 },
    { Date: "2024-12-01T06:21:00Z", Phase: 0 },
    { Date: "2024-12-08T15:26:00Z", Phase: 1 },
    { Date: "2024-12-15T09:02:00Z", Phase: 2 },
    { Date: "2024-12-22T22:18:00Z", Phase: 3 },
    { Date: "2024-12-30T22:27:00Z", Phase: 0 },
  ],
  2025: [
    { Date: "2025-01-06T23:56:00Z", Phase: 1 },
    { Date: "2025-01-13T22:27:00Z", Phase: 2 },
    { Date: "2025-01-21T20:31:00Z", Phase: 3 },
    { Date: "2025-01-29T12:36:00Z", Phase: 0 },
    { Date: "2025-02-05T08:02:00Z", Phase: 1 },
    { Date: "2025-02-12T13:53:00Z", Phase: 2 },
    { Date: "2025-02-20T17:32:00Z", Phase: 3 },
    { Date: "2025-02-28T00:45:00Z", Phase: 0 },
    { Date: "2025-03-06T16:31:00Z", Phase: 1 },
    { Date: "2025-03-14T06:55:00Z", Phase: 2 },
    { Date: "2025-03-22T11:29:00Z", Phase: 3 },
    { Date: "2025-03-29T10:58:00Z", Phase: 0 },
    { Date: "2025-04-05T02:15:00Z", Phase: 1 },
    { Date: "2025-04-13T00:22:00Z", Phase: 2 },
    { Date: "2025-04-21T01:35:00Z", Phase: 3 },
    { Date: "2025-04-27T19:31:00Z", Phase: 0 },
    { Date: "2025-05-04T13:52:00Z", Phase: 1 },
    { Date: "2025-05-12T16:56:00Z", Phase: 2 },
    { Date: "2025-05-20T11:59:00Z", Phase: 3 },
    { Date: "2025-05-27T03:02:00Z", Phase: 0 },
    { Date: "2025-06-03T03:41:00Z", Phase: 1 },
    { Date: "2025-06-11T07:44:00Z", Phase: 2 },
    { Date: "2025-06-18T19:19:00Z", Phase: 3 },
    { Date: "2025-06-25T10:31:00Z", Phase: 0 },
    { Date: "2025-07-02T19:30:00Z", Phase: 1 },
    { Date: "2025-07-10T20:37:00Z", Phase: 2 },
    { Date: "2025-07-18T00:38:00Z", Phase: 3 },
    { Date: "2025-07-24T19:11:00Z", Phase: 0 },
    { Date: "2025-08-01T12:41:00Z", Phase: 1 },
    { Date: "2025-08-09T07:55:00Z", Phase: 2 },
    { Date: "2025-08-16T05:12:00Z", Phase: 3 },
    { Date: "2025-08-23T06:06:00Z", Phase: 0 },
    { Date: "2025-08-31T06:25:00Z", Phase: 1 },
    { Date: "2025-09-07T18:09:00Z", Phase: 2 },
    { Date: "2025-09-14T10:33:00Z", Phase: 3 },
    { Date: "2025-09-21T19:54:00Z", Phase: 0 },
    { Date: "2025-09-29T23:54:00Z", Phase: 1 },
    { Date: "2025-10-07T03:47:00Z", Phase: 2 },
    { Date: "2025-10-13T18:13:00Z", Phase: 3 },
    { Date: "2025-10-21T12:25:00Z", Phase: 0 },
    { Date: "2025-10-29T16:21:00Z", Phase: 1 },
    { Date: "2025-11-05T13:19:00Z", Phase: 2 },
    { Date: "2025-11-12T05:28:00Z", Phase: 3 },
    { Date: "2025-11-20T06:47:00Z", Phase: 0 },
    { Date: "2025-11-28T06:59:00Z", Phase: 1 },
    { Date: "2025-12-04T23:14:00Z", Phase: 2 },
    { Date: "2025-12-11T20:52:00Z", Phase: 3 },
    { Date: "2025-12-20T01:43:00Z", Phase: 0 },
    { Date: "2025-12-27T19:10:00Z", Phase: 1 },
  ],
  2026: [
    { Date: "2026-01-03T10:03:00Z", Phase: 2 },
    { Date: "2026-01-10T15:48:00Z", Phase: 3 },
    { Date: "2026-01-18T19:52:00Z", Phase: 0 },
    { Date: "2026-01-26T04:47:00Z", Phase: 1 },
    { Date: "2026-02-01T22:09:00Z", Phase: 2 },
    { Date: "2026-02-09T12:43:00Z", Phase: 3 },
    { Date: "2026-02-17T12:01:00Z", Phase: 0 },
    { Date: "2026-02-24T12:27:00Z", Phase: 1 },
    { Date: "2026-03-03T11:38:00Z", Phase: 2 },
    { Date: "2026-03-11T09:38:00Z", Phase: 3 },
    { Date: "2026-03-19T01:23:00Z", Phase: 0 },
    { Date: "2026-03-25T19:18:00Z", Phase: 1 },
    { Date: "2026-04-02T02:12:00Z", Phase: 2 },
    { Date: "2026-04-10T04:51:00Z", Phase: 3 },
    { Date: "2026-04-17T11:52:00Z", Phase: 0 },
    { Date: "2026-04-24T02:32:00Z", Phase: 1 },
    { Date: "2026-05-01T17:23:00Z", Phase: 2 },
    { Date: "2026-05-09T21:10:00Z", Phase: 3 },
    { Date: "2026-05-16T20:01:00Z", Phase: 0 },
    { Date: "2026-05-23T11:11:00Z", Phase: 1 },
    { Date: "2026-05-31T08:45:00Z", Phase: 2 },
    { Date: "2026-06-08T10:00:00Z", Phase: 3 },
    { Date: "2026-06-15T02:54:00Z", Phase: 0 },
    { Date: "2026-06-21T21:55:00Z", Phase: 1 },
    { Date: "2026-06-29T23:56:00Z", Phase: 2 },
    { Date: "2026-07-07T19:29:00Z", Phase: 3 },
    { Date: "2026-07-14T09:43:00Z", Phase: 0 },
    { Date: "2026-07-21T11:05:00Z", Phase: 1 },
    { Date: "2026-07-29T14:36:00Z", Phase: 2 },
    { Date: "2026-08-06T02:21:00Z", Phase: 3 },
    { Date: "2026-08-12T17:37:00Z", Phase: 0 },
    { Date: "2026-08-20T02:46:00Z", Phase: 1 },
    { Date: "2026-08-28T04:18:00Z", Phase: 2 },
    { Date: "2026-09-04T07:51:00Z", Phase: 3 },
    { Date: "2026-09-11T03:27:00Z", Phase: 0 },
    { Date: "2026-09-18T20:44:00Z", Phase: 1 },
    { Date: "2026-09-26T16:49:00Z", Phase: 2 },
    { Date: "2026-10-03T13:25:00Z", Phase: 3 },
    { Date: "2026-10-10T15:50:00Z", Phase: 0 },
    { Date: "2026-10-18T16:12:00Z", Phase: 1 },
    { Date: "2026-10-26T04:12:00Z", Phase: 2 },
    { Date: "2026-11-01T20:28:00Z", Phase: 3 },
    { Date: "2026-11-09T07:02:00Z", Phase: 0 },
    { Date: "2026-11-17T11:48:00Z", Phase: 1 },
    { Date: "2026-11-24T14:53:00Z", Phase: 2 },
    { Date: "2026-12-01T06:08:00Z", Phase: 3 },
    { Date: "2026-12-09T00:52:00Z", Phase: 0 },
    { Date: "2026-12-17T05:42:00Z", Phase: 1 },
    { Date: "2026-12-24T01:28:00Z", Phase: 2 },
    { Date: "2026-12-30T18:59:00Z", Phase: 3 },
  ],
  2027: [
    { Date: "2027-01-07T20:24:00Z", Phase: 0 },
    { Date: "2027-01-15T20:34:00Z", Phase: 1 },
    { Date: "2027-01-22T12:17:00Z", Phase: 2 },
    { Date: "2027-01-29T10:55:00Z", Phase: 3 },
    { Date: "2027-02-06T15:56:00Z", Phase: 0 },
    { Date: "2027-02-14T07:58:00Z", Phase: 1 },
    { Date: "2027-02-20T23:23:00Z", Phase: 2 },
    { Date: "2027-02-28T05:16:00Z", Phase: 3 },
    { Date: "2027-03-08T09:29:00Z", Phase: 0 },
    { Date: "2027-03-15T16:25:00Z", Phase: 1 },
    { Date: "2027-03-22T10:44:00Z", Phase: 2 },
    { Date: "2027-03-30T00:54:00Z", Phase: 3 },
    { Date: "2027-04-06T23:51:00Z", Phase: 0 },
    { Date: "2027-04-13T22:56:00Z", Phase: 1 },
    { Date: "2027-04-20T22:27:00Z", Phase: 2 },
    { Date: "2027-04-28T20:18:00Z", Phase: 3 },
    { Date: "2027-05-06T10:58:00Z", Phase: 0 },
    { Date: "2027-05-13T04:44:00Z", Phase: 1 },
    { Date: "2027-05-20T10:59:00Z", Phase: 2 },
    { Date: "2027-05-28T13:58:00Z", Phase: 3 },
    { Date: "2027-06-04T19:40:00Z", Phase: 0 },
    { Date: "2027-06-11T10:56:00Z", Phase: 1 },
    { Date: "2027-06-19T00:44:00Z", Phase: 2 },
    { Date: "2027-06-27T04:54:00Z", Phase: 3 },
    { Date: "2027-07-04T03:02:00Z", Phase: 0 },
    { Date: "2027-07-10T18:39:00Z", Phase: 1 },
    { Date: "2027-07-18T15:45:00Z", Phase: 2 },
    { Date: "2027-07-26T16:55:00Z", Phase: 3 },
    { Date: "2027-08-02T10:05:00Z", Phase: 0 },
    { Date: "2027-08-09T04:54:00Z", Phase: 1 },
    { Date: "2027-08-17T07:29:00Z", Phase: 2 },
    { Date: "2027-08-25T02:27:00Z", Phase: 3 },
    { Date: "2027-08-31T17:41:00Z", Phase: 0 },
    { Date: "2027-09-07T18:31:00Z", Phase: 1 },
    { Date: "2027-09-15T23:03:00Z", Phase: 2 },
    { Date: "2027-09-23T10:20:00Z", Phase: 3 },
    { Date: "2027-09-30T02:36:00Z", Phase: 0 },
    { Date: "2027-10-07T11:47:00Z", Phase: 1 },
    { Date: "2027-10-15T13:47:00Z", Phase: 2 },
    { Date: "2027-10-22T17:29:00Z", Phase: 3 },
    { Date: "2027-10-29T13:36:00Z", Phase: 0 },
    { Date: "2027-11-06T08:00:00Z", Phase: 1 },
    { Date: "2027-11-14T03:26:00Z", Phase: 2 },
    { Date: "2027-11-21T00:48:00Z", Phase: 3 },
    { Date: "2027-11-28T03:24:00Z", Phase: 0 },
    { Date: "2027-12-06T05:22:00Z", Phase: 1 },
    { Date: "2027-12-13T16:09:00Z", Phase: 2 },
    { Date: "2027-12-20T09:11:00Z", Phase: 3 },
    { Date: "2027-12-27T20:12:00Z", Phase: 0 },
  ],
  2028: [
    { Date: "2028-01-05T01:40:00Z", Phase: 1 },
    { Date: "2028-01-12T04:03:00Z", Phase: 2 },
    { Date: "2028-01-18T19:26:00Z", Phase: 3 },
    { Date: "2028-01-26T15:12:00Z", Phase: 0 },
    { Date: "2028-02-03T19:10:00Z", Phase: 1 },
    { Date: "2028-02-10T15:04:00Z", Phase: 2 },
    { Date: "2028-02-17T08:08:00Z", Phase: 3 },
    { Date: "2028-02-25T10:37:00Z", Phase: 0 },
    { Date: "2028-03-04T09:02:00Z", Phase: 1 },
    { Date: "2028-03-11T01:06:00Z", Phase: 2 },
    { Date: "2028-03-17T23:23:00Z", Phase: 3 },
    { Date: "2028-03-26T04:31:00Z", Phase: 0 },
    { Date: "2028-04-02T19:15:00Z", Phase: 1 },
    { Date: "2028-04-09T10:26:00Z", Phase: 2 },
    { Date: "2028-04-16T16:37:00Z", Phase: 3 },
    { Date: "2028-04-24T19:47:00Z", Phase: 0 },
    { Date: "2028-05-02T02:26:00Z", Phase: 1 },
    { Date: "2028-05-08T19:49:00Z", Phase: 2 },
    { Date: "2028-05-16T10:43:00Z", Phase: 3 },
    { Date: "2028-05-24T08:16:00Z", Phase: 0 },
    { Date: "2028-05-31T07:36:00Z", Phase: 1 },
    { Date: "2028-06-07T06:09:00Z", Phase: 2 },
    { Date: "2028-06-15T04:27:00Z", Phase: 3 },
    { Date: "2028-06-22T18:27:00Z", Phase: 0 },
    { Date: "2028-06-29T12:10:00Z", Phase: 1 },
    { Date: "2028-07-06T18:11:00Z", Phase: 2 },
    { Date: "2028-07-14T20:56:00Z", Phase: 3 },
    { Date: "2028-07-22T03:02:00Z", Phase: 0 },
    { Date: "2028-07-28T17:40:00Z", Phase: 1 },
    { Date: "2028-08-05T08:10:00Z", Phase: 2 },
    { Date: "2028-08-13T11:45:00Z", Phase: 3 },
    { Date: "2028-08-20T10:44:00Z", Phase: 0 },
    { Date: "2028-08-27T01:36:00Z", Phase: 1 },
    { Date: "2028-09-03T23:47:00Z", Phase: 2 },
    { Date: "2028-09-12T00:46:00Z", Phase: 3 },
    { Date: "2028-09-18T18:24:00Z", Phase: 0 },
    { Date: "2028-09-25T13:10:00Z", Phase: 1 },
    { Date: "2028-10-03T16:25:00Z", Phase: 2 },
    { Date: "2028-10-11T11:57:00Z", Phase: 3 },
    { Date: "2028-10-18T02:57:00Z", Phase: 0 },
    { Date: "2028-10-25T04:53:00Z", Phase: 1 },
    { Date: "2028-11-02T09:17:00Z", Phase: 2 },
    { Date: "2028-11-09T21:26:00Z", Phase: 3 },
    { Date: "2028-11-16T13:18:00Z", Phase: 0 },
    { Date: "2028-11-24T00:14:00Z", Phase: 1 },
    { Date: "2028-12-02T01:40:00Z", Phase: 2 },
    { Date: "2028-12-09T05:39:00Z", Phase: 3 },
    { Date: "2028-12-16T02:06:00Z", Phase: 0 },
    { Date: "2028-12-23T21:45:00Z", Phase: 1 },
    { Date: "2028-12-31T16:48:00Z", Phase: 2 },
  ],
  2029: [
    { Date: "2029-01-07T13:26:00Z", Phase: 3 },
    { Date: "2029-01-14T17:24:00Z", Phase: 0 },
    { Date: "2029-01-22T19:23:00Z", Phase: 1 },
    { Date: "2029-01-30T06:03:00Z", Phase: 2 },
    { Date: "2029-02-05T21:52:00Z", Phase: 3 },
    { Date: "2029-02-13T10:31:00Z", Phase: 0 },
    { Date: "2029-02-21T15:10:00Z", Phase: 1 },
    { Date: "2029-02-28T17:10:00Z", Phase: 2 },
    { Date: "2029-03-07T07:51:00Z", Phase: 3 },
    { Date: "2029-03-15T04:19:00Z", Phase: 0 },
    { Date: "2029-03-23T07:33:00Z", Phase: 1 },
    { Date: "2029-03-30T02:26:00Z", Phase: 2 },
    { Date: "2029-04-05T19:51:00Z", Phase: 3 },
    { Date: "2029-04-13T21:40:00Z", Phase: 0 },
    { Date: "2029-04-21T19:50:00Z", Phase: 1 },
    { Date: "2029-04-28T10:37:00Z", Phase: 2 },
    { Date: "2029-05-05T09:48:00Z", Phase: 3 },
    { Date: "2029-05-13T13:42:00Z", Phase: 0 },
    { Date: "2029-05-21T04:16:00Z", Phase: 1 },
    { Date: "2029-05-27T18:37:00Z", Phase: 2 },
    { Date: "2029-06-04T01:19:00Z", Phase: 3 },
    { Date: "2029-06-12T03:50:00Z", Phase: 0 },
    { Date: "2029-06-19T09:54:00Z", Phase: 1 },
    { Date: "2029-06-26T03:22:00Z", Phase: 2 },
    { Date: "2029-07-03T17:57:00Z", Phase: 3 },
    { Date: "2029-07-11T15:51:00Z", Phase: 0 },
    { Date: "2029-07-18T14:14:00Z", Phase: 1 },
    { Date: "2029-07-25T13:36:00Z", Phase: 2 },
    { Date: "2029-08-02T11:15:00Z", Phase: 3 },
    { Date: "2029-08-10T01:56:00Z", Phase: 0 },
    { Date: "2029-08-16T18:55:00Z", Phase: 1 },
    { Date: "2029-08-24T01:51:00Z", Phase: 2 },
    { Date: "2029-09-01T04:33:00Z", Phase: 3 },
    { Date: "2029-09-08T10:44:00Z", Phase: 0 },
    { Date: "2029-09-15T01:29:00Z", Phase: 1 },
    { Date: "2029-09-22T16:29:00Z", Phase: 2 },
    { Date: "2029-09-30T20:57:00Z", Phase: 3 },
    { Date: "2029-10-07T19:14:00Z", Phase: 0 },
    { Date: "2029-10-14T11:09:00Z", Phase: 1 },
    { Date: "2029-10-22T09:27:00Z", Phase: 2 },
    { Date: "2029-10-30T11:32:00Z", Phase: 3 },
    { Date: "2029-11-06T04:24:00Z", Phase: 0 },
    { Date: "2029-11-13T00:35:00Z", Phase: 1 },
    { Date: "2029-11-21T04:03:00Z", Phase: 2 },
    { Date: "2029-11-28T23:48:00Z", Phase: 3 },
    { Date: "2029-12-05T14:52:00Z", Phase: 0 },
    { Date: "2029-12-12T17:49:00Z", Phase: 1 },
    { Date: "2029-12-20T22:46:00Z", Phase: 2 },
    { Date: "2029-12-28T09:49:00Z", Phase: 3 },
  ],
  2030: [
    { Date: "2030-01-04T02:49:00Z", Phase: 0 },
    { Date: "2030-01-11T14:06:00Z", Phase: 1 },
    { Date: "2030-01-19T15:54:00Z", Phase: 2 },
    { Date: "2030-01-26T18:14:00Z", Phase: 3 },
    { Date: "2030-02-02T16:07:00Z", Phase: 0 },
    { Date: "2030-02-10T11:49:00Z", Phase: 1 },
    { Date: "2030-02-18T06:20:00Z", Phase: 2 },
    { Date: "2030-02-25T01:58:00Z", Phase: 3 },
    { Date: "2030-03-04T06:34:00Z", Phase: 0 },
    { Date: "2030-03-12T08:47:00Z", Phase: 1 },
    { Date: "2030-03-19T17:56:00Z", Phase: 2 },
    { Date: "2030-03-26T09:51:00Z", Phase: 3 },
    { Date: "2030-04-02T22:02:00Z", Phase: 0 },
    { Date: "2030-04-11T02:57:00Z", Phase: 1 },
    { Date: "2030-04-18T03:20:00Z", Phase: 2 },
    { Date: "2030-04-24T18:39:00Z", Phase: 3 },
    { Date: "2030-05-02T14:12:00Z", Phase: 0 },
    { Date: "2030-05-10T17:11:00Z", Phase: 1 },
    { Date: "2030-05-17T11:19:00Z", Phase: 2 },
    { Date: "2030-05-24T04:57:00Z", Phase: 3 },
    { Date: "2030-06-01T06:21:00Z", Phase: 0 },
    { Date: "2030-06-09T03:36:00Z", Phase: 1 },
    { Date: "2030-06-15T18:41:00Z", Phase: 2 },
    { Date: "2030-06-22T17:19:00Z", Phase: 3 },
    { Date: "2030-06-30T21:34:00Z", Phase: 0 },
    { Date: "2030-07-08T11:02:00Z", Phase: 1 },
    { Date: "2030-07-15T02:12:00Z", Phase: 2 },
    { Date: "2030-07-22T08:07:00Z", Phase: 3 },
    { Date: "2030-07-30T11:11:00Z", Phase: 0 },
    { Date: "2030-08-06T16:43:00Z", Phase: 1 },
    { Date: "2030-08-13T10:44:00Z", Phase: 2 },
    { Date: "2030-08-21T01:15:00Z", Phase: 3 },
    { Date: "2030-08-28T23:07:00Z", Phase: 0 },
    { Date: "2030-09-04T21:55:00Z", Phase: 1 },
    { Date: "2030-09-11T21:18:00Z", Phase: 2 },
    { Date: "2030-09-19T19:56:00Z", Phase: 3 },
    { Date: "2030-09-27T09:54:00Z", Phase: 0 },
    { Date: "2030-10-04T03:56:00Z", Phase: 1 },
    { Date: "2030-10-11T10:47:00Z", Phase: 2 },
    { Date: "2030-10-19T14:50:00Z", Phase: 3 },
    { Date: "2030-10-26T20:17:00Z", Phase: 0 },
    { Date: "2030-11-02T11:56:00Z", Phase: 1 },
    { Date: "2030-11-10T03:30:00Z", Phase: 2 },
    { Date: "2030-11-18T08:32:00Z", Phase: 3 },
    { Date: "2030-11-25T06:46:00Z", Phase: 0 },
    { Date: "2030-12-01T22:57:00Z", Phase: 1 },
    { Date: "2030-12-09T22:40:00Z", Phase: 2 },
    { Date: "2030-12-18T00:01:00Z", Phase: 3 },
    { Date: "2030-12-24T17:32:00Z", Phase: 0 },
    { Date: "2030-12-31T13:36:00Z", Phase: 1 },
  ],
  2031: [
    { Date: "2031-01-08T18:26:00Z", Phase: 2 },
    { Date: "2031-01-16T12:47:00Z", Phase: 3 },
    { Date: "2031-01-23T04:31:00Z", Phase: 0 },
    { Date: "2031-01-30T07:43:00Z", Phase: 1 },
    { Date: "2031-02-07T12:46:00Z", Phase: 2 },
    { Date: "2031-02-14T22:50:00Z", Phase: 3 },
    { Date: "2031-02-21T15:49:00Z", Phase: 0 },
    { Date: "2031-03-01T04:02:00Z", Phase: 1 },
    { Date: "2031-03-09T04:29:00Z", Phase: 2 },
    { Date: "2031-03-16T06:36:00Z", Phase: 3 },
    { Date: "2031-03-23T03:49:00Z", Phase: 0 },
    { Date: "2031-03-31T00:32:00Z", Phase: 1 },
    { Date: "2031-04-07T17:21:00Z", Phase: 2 },
    { Date: "2031-04-14T12:58:00Z", Phase: 3 },
    { Date: "2031-04-21T16:57:00Z", Phase: 0 },
    { Date: "2031-04-29T19:19:00Z", Phase: 1 },
    { Date: "2031-05-07T03:40:00Z", Phase: 2 },
    { Date: "2031-05-13T19:07:00Z", Phase: 3 },
    { Date: "2031-05-21T07:17:00Z", Phase: 0 },
    { Date: "2031-05-29T11:19:00Z", Phase: 1 },
    { Date: "2031-06-05T11:58:00Z", Phase: 2 },
    { Date: "2031-06-12T02:20:00Z", Phase: 3 },
    { Date: "2031-06-19T22:24:00Z", Phase: 0 },
    { Date: "2031-06-28T00:19:00Z", Phase: 1 },
    { Date: "2031-07-04T19:01:00Z", Phase: 2 },
    { Date: "2031-07-11T11:50:00Z", Phase: 3 },
    { Date: "2031-07-19T13:40:00Z", Phase: 0 },
    { Date: "2031-07-27T10:35:00Z", Phase: 1 },
    { Date: "2031-08-03T01:45:00Z", Phase: 2 },
    { Date: "2031-08-10T00:23:00Z", Phase: 3 },
    { Date: "2031-08-18T04:32:00Z", Phase: 0 },
    { Date: "2031-08-25T18:39:00Z", Phase: 1 },
    { Date: "2031-09-01T09:20:00Z", Phase: 2 },
    { Date: "2031-09-08T16:14:00Z", Phase: 3 },
    { Date: "2031-09-16T18:47:00Z", Phase: 0 },
    { Date: "2031-09-24T01:20:00Z", Phase: 1 },
    { Date: "2031-09-30T18:58:00Z", Phase: 2 },
    { Date: "2031-10-08T10:50:00Z", Phase: 3 },
    { Date: "2031-10-16T08:21:00Z", Phase: 0 },
    { Date: "2031-10-23T07:36:00Z", Phase: 1 },
    { Date: "2031-10-30T07:32:00Z", Phase: 2 },
    { Date: "2031-11-07T07:02:00Z", Phase: 3 },
    { Date: "2031-11-14T21:09:00Z", Phase: 0 },
    { Date: "2031-11-21T14:45:00Z", Phase: 1 },
    { Date: "2031-11-28T23:18:00Z", Phase: 2 },
    { Date: "2031-12-07T03:19:00Z", Phase: 3 },
    { Date: "2031-12-14T09:06:00Z", Phase: 0 },
    { Date: "2031-12-21T00:00:00Z", Phase: 1 },
    { Date: "2031-12-28T17:33:00Z", Phase: 2 },
  ],
  2032: [
    { Date: "2032-01-05T22:04:00Z", Phase: 3 },
    { Date: "2032-01-12T20:06:00Z", Phase: 0 },
    { Date: "2032-01-19T12:14:00Z", Phase: 1 },
    { Date: "2032-01-27T12:52:00Z", Phase: 2 },
    { Date: "2032-02-04T13:49:00Z", Phase: 3 },
    { Date: "2032-02-11T06:24:00Z", Phase: 0 },
    { Date: "2032-02-18T03:29:00Z", Phase: 1 },
    { Date: "2032-02-26T07:43:00Z", Phase: 2 },
    { Date: "2032-03-05T01:47:00Z", Phase: 3 },
    { Date: "2032-03-11T16:24:00Z", Phase: 0 },
    { Date: "2032-03-18T20:56:00Z", Phase: 1 },
    { Date: "2032-03-27T00:46:00Z", Phase: 2 },
    { Date: "2032-04-03T10:10:00Z", Phase: 3 },
    { Date: "2032-04-10T02:39:00Z", Phase: 0 },
    { Date: "2032-04-17T15:24:00Z", Phase: 1 },
    { Date: "2032-04-25T15:09:00Z", Phase: 2 },
    { Date: "2032-05-02T16:02:00Z", Phase: 3 },
    { Date: "2032-05-09T13:36:00Z", Phase: 0 },
    { Date: "2032-05-17T09:43:00Z", Phase: 1 },
    { Date: "2032-05-25T02:37:00Z", Phase: 2 },
    { Date: "2032-05-31T20:51:00Z", Phase: 3 },
    { Date: "2032-06-08T01:32:00Z", Phase: 0 },
    { Date: "2032-06-16T03:00:00Z", Phase: 1 },
    { Date: "2032-06-23T11:32:00Z", Phase: 2 },
    { Date: "2032-06-30T02:12:00Z", Phase: 3 },
    { Date: "2032-07-07T14:41:00Z", Phase: 0 },
    { Date: "2032-07-15T18:32:00Z", Phase: 1 },
    { Date: "2032-07-22T18:51:00Z", Phase: 2 },
    { Date: "2032-07-29T09:25:00Z", Phase: 3 },
    { Date: "2032-08-06T05:11:00Z", Phase: 0 },
    { Date: "2032-08-14T07:51:00Z", Phase: 1 },
    { Date: "2032-08-21T01:47:00Z", Phase: 2 },
    { Date: "2032-08-27T19:33:00Z", Phase: 3 },
    { Date: "2032-09-04T20:56:00Z", Phase: 0 },
    { Date: "2032-09-12T18:49:00Z", Phase: 1 },
    { Date: "2032-09-19T09:30:00Z", Phase: 2 },
    { Date: "2032-09-26T09:12:00Z", Phase: 3 },
    { Date: "2032-10-04T13:26:00Z", Phase: 0 },
    { Date: "2032-10-12T03:47:00Z", Phase: 1 },
    { Date: "2032-10-18T18:58:00Z", Phase: 2 },
    { Date: "2032-10-26T02:29:00Z", Phase: 3 },
    { Date: "2032-11-03T05:45:00Z", Phase: 0 },
    { Date: "2032-11-10T11:33:00Z", Phase: 1 },
    { Date: "2032-11-17T06:42:00Z", Phase: 2 },
    { Date: "2032-11-24T22:48:00Z", Phase: 3 },
    { Date: "2032-12-02T20:53:00Z", Phase: 0 },
    { Date: "2032-12-09T19:08:00Z", Phase: 1 },
    { Date: "2032-12-16T20:49:00Z", Phase: 2 },
    { Date: "2032-12-24T20:39:00Z", Phase: 3 },
  ],
  2033: [
    { Date: "2033-01-01T10:17:00Z", Phase: 0 },
    { Date: "2033-01-08T03:34:00Z", Phase: 1 },
    { Date: "2033-01-15T13:07:00Z", Phase: 2 },
    { Date: "2033-01-23T17:46:00Z", Phase: 3 },
    { Date: "2033-01-30T22:00:00Z", Phase: 0 },
    { Date: "2033-02-06T13:34:00Z", Phase: 1 },
    { Date: "2033-02-14T07:04:00Z", Phase: 2 },
    { Date: "2033-02-22T11:53:00Z", Phase: 3 },
    { Date: "2033-03-01T08:23:00Z", Phase: 0 },
    { Date: "2033-03-08T01:27:00Z", Phase: 1 },
    { Date: "2033-03-16T01:37:00Z", Phase: 2 },
    { Date: "2033-03-24T01:50:00Z", Phase: 3 },
    { Date: "2033-03-30T17:51:00Z", Phase: 0 },
    { Date: "2033-04-06T15:14:00Z", Phase: 1 },
    { Date: "2033-04-14T19:17:00Z", Phase: 2 },
    { Date: "2033-04-22T11:42:00Z", Phase: 3 },
    { Date: "2033-04-29T02:46:00Z", Phase: 0 },
    { Date: "2033-05-06T06:45:00Z", Phase: 1 },
    { Date: "2033-05-14T10:43:00Z", Phase: 2 },
    { Date: "2033-05-21T18:29:00Z", Phase: 3 },
    { Date: "2033-05-28T11:36:00Z", Phase: 0 },
    { Date: "2033-06-04T23:39:00Z", Phase: 1 },
    { Date: "2033-06-12T23:19:00Z", Phase: 2 },
    { Date: "2033-06-19T23:29:00Z", Phase: 3 },
    { Date: "2033-06-26T21:07:00Z", Phase: 0 },
    { Date: "2033-07-04T17:12:00Z", Phase: 1 },
    { Date: "2033-07-12T09:28:00Z", Phase: 2 },
    { Date: "2033-07-19T04:07:00Z", Phase: 3 },
    { Date: "2033-07-26T08:12:00Z", Phase: 0 },
    { Date: "2033-08-03T10:26:00Z", Phase: 1 },
    { Date: "2033-08-10T18:07:00Z", Phase: 2 },
    { Date: "2033-08-17T09:43:00Z", Phase: 3 },
    { Date: "2033-08-24T21:40:00Z", Phase: 0 },
    { Date: "2033-09-02T02:23:00Z", Phase: 1 },
    { Date: "2033-09-09T02:20:00Z", Phase: 2 },
    { Date: "2033-09-15T17:33:00Z", Phase: 3 },
    { Date: "2033-09-23T13:40:00Z", Phase: 0 },
    { Date: "2033-10-01T16:33:00Z", Phase: 1 },
    { Date: "2033-10-08T10:58:00Z", Phase: 2 },
    { Date: "2033-10-15T04:47:00Z", Phase: 3 },
    { Date: "2033-10-23T07:28:00Z", Phase: 0 },
    { Date: "2033-10-31T04:46:00Z", Phase: 1 },
    { Date: "2033-11-06T20:32:00Z", Phase: 2 },
    { Date: "2033-11-13T20:09:00Z", Phase: 3 },
    { Date: "2033-11-22T01:39:00Z", Phase: 0 },
    { Date: "2033-11-29T15:15:00Z", Phase: 1 },
    { Date: "2033-12-06T07:22:00Z", Phase: 2 },
    { Date: "2033-12-13T15:28:00Z", Phase: 3 },
    { Date: "2033-12-21T18:46:00Z", Phase: 0 },
    { Date: "2033-12-29T00:20:00Z", Phase: 1 },
  ],
  2034: [
    { Date: "2034-01-04T19:47:00Z", Phase: 2 },
    { Date: "2034-01-12T13:17:00Z", Phase: 3 },
    { Date: "2034-01-20T10:01:00Z", Phase: 0 },
    { Date: "2034-01-27T08:32:00Z", Phase: 1 },
    { Date: "2034-02-03T10:04:00Z", Phase: 2 },
    { Date: "2034-02-11T11:09:00Z", Phase: 3 },
    { Date: "2034-02-18T23:10:00Z", Phase: 0 },
    { Date: "2034-02-25T16:34:00Z", Phase: 1 },
    { Date: "2034-03-05T02:10:00Z", Phase: 2 },
    { Date: "2034-03-13T06:44:00Z", Phase: 3 },
    { Date: "2034-03-20T10:14:00Z", Phase: 0 },
    { Date: "2034-03-27T01:18:00Z", Phase: 1 },
    { Date: "2034-04-03T19:19:00Z", Phase: 2 },
    { Date: "2034-04-11T22:45:00Z", Phase: 3 },
    { Date: "2034-04-18T19:26:00Z", Phase: 0 },
    { Date: "2034-04-25T11:34:00Z", Phase: 1 },
    { Date: "2034-05-03T12:15:00Z", Phase: 2 },
    { Date: "2034-05-11T10:56:00Z", Phase: 3 },
    { Date: "2034-05-18T03:12:00Z", Phase: 0 },
    { Date: "2034-05-24T23:57:00Z", Phase: 1 },
    { Date: "2034-06-02T03:54:00Z", Phase: 2 },
    { Date: "2034-06-09T19:44:00Z", Phase: 3 },
    { Date: "2034-06-16T10:26:00Z", Phase: 0 },
    { Date: "2034-06-23T14:35:00Z", Phase: 1 },
    { Date: "2034-07-01T17:44:00Z", Phase: 2 },
    { Date: "2034-07-09T01:59:00Z", Phase: 3 },
    { Date: "2034-07-15T18:15:00Z", Phase: 0 },
    { Date: "2034-07-23T07:05:00Z", Phase: 1 },
    { Date: "2034-07-31T05:54:00Z", Phase: 2 },
    { Date: "2034-08-07T06:50:00Z", Phase: 3 },
    { Date: "2034-08-14T03:53:00Z", Phase: 0 },
    { Date: "2034-08-22T00:43:00Z", Phase: 1 },
    { Date: "2034-08-29T16:49:00Z", Phase: 2 },
    { Date: "2034-09-05T11:41:00Z", Phase: 3 },
    { Date: "2034-09-12T16:14:00Z", Phase: 0 },
    { Date: "2034-09-20T18:39:00Z", Phase: 1 },
    { Date: "2034-09-28T02:57:00Z", Phase: 2 },
    { Date: "2034-10-04T18:04:00Z", Phase: 3 },
    { Date: "2034-10-12T07:32:00Z", Phase: 0 },
    { Date: "2034-10-20T12:03:00Z", Phase: 1 },
    { Date: "2034-10-27T12:42:00Z", Phase: 2 },
    { Date: "2034-11-03T03:27:00Z", Phase: 3 },
    { Date: "2034-11-11T01:16:00Z", Phase: 0 },
    { Date: "2034-11-19T04:01:00Z", Phase: 1 },
    { Date: "2034-11-25T22:32:00Z", Phase: 2 },
    { Date: "2034-12-02T16:46:00Z", Phase: 3 },
    { Date: "2034-12-10T20:14:00Z", Phase: 0 },
    { Date: "2034-12-18T17:45:00Z", Phase: 1 },
    { Date: "2034-12-25T08:54:00Z", Phase: 2 },
  ],
};

export default MOON_PHASE_DATA;