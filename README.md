# auto-take-home

1. Clone repo
2. npm install
3. npx playwright test --headed (if you want to see tests running)

run tests (sample output shown)

npx playwright test --headed

Running 2 tests using 1 worker

  ✓  1 [chromium] › tests/tickets/buyTickets.spec.ts:9:5 › Verify buy tickets page title (5.6s)
  ✓  2 …m] › tests/tickets/buyTickets.spec.ts:14:5 › Enter sample train times and destinations and verify cancel saves data (10.7s)

  
  2 PASSED (18.3s)

SUGGESTIONS and OBSERVATIONS

many of the controls lack IDs for easier automation
some controls like submit buttons are inputs rather than buttons which seems odd
date formats could be more forgiving when using freehand entry of data

