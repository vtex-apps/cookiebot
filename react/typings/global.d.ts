interface Window extends Window {
  __cookiebot_id: string
  Cookiebot: Cookiebot
}

interface Cookiebot {
  runScripts: () => void
}
