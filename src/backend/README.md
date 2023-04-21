# CheatGPT Chrome Extension 

This project is a fork of [chat-gpt-chrome-extension](https://github.com/gragland/chatgpt-chrome-extension)  by Gabe Ragland. It is a Chrome extension that adds [ChatGPT](https://chat.openai.com) to every text box on the internet! Use it to to get answer discretely from ChatGPT.

![](https://i.imgur.com/CPMOyG7.gif)

## Install

First clone this repo on your local machine

Then install dependencies

```bash
npm install
```

Copy `.env-example` into a new file named `.env` and add your ChatGPT API Key.
If you don't have one or you don't have tokens left, you can use the ChatGPT unofficial API by [Travis Fischer](https://github.com/transitive-bullshit/chatgpt-api). The easiest way to set it up is to get your access token, which can be found from an opened ChatGPT session with this [url](https://chat.openai.com/api/auth/session), and paste into the `OPENAI_ACCESS_TOKEN` field in `.env` and leave the `OPENAI_API_KEY` field blank.

```bash

```bash

```bash

```bash

Run the server so the extension can communicate with ChatGPT.

```bash
node server.js
```

This will automate interaction with ChatGPT through OpenAI's API, thanks to the [chatgpt-api](https://github.com/transitive-bullshit/chatgpt-api) library.

Add the extension

1. Go to chrome://extensions in your Google Chrome browser
2. Check the Developer mode checkbox in the top right-hand corner
3. Click "Load Unpacked" to see a file-selection dialog
4. Select your local `chatgpt-chrome-extension/extension` directory

You'll now see "Ask ChatGPT" if you right click in any text input or content editable area.
The answer will be added to your clipboard and you can paste it where you want.

## Troubleshooting

If ChatGPT is taking a very long time to respond or not responding at all then it could mean that their servers are currently overloaded. You can confirm this by going to [chat.openai.com/chat](https://chat.openai.com/chat) and seeing whether their website works directly.

## Plugins

Plugins have the ability to inform ChatGPT of specific conversation rules and parse replies from ChatGPT before they are sent to the browser.

[Default](/plugins/Default.js) - Sets some default conversation rules 🧑‍🏫

[Image](/plugins/Image.js) - Tells ChatGPT to describe things visually when asked for an image and then replaces the description with a matching AI generated image from [Lexica](http://lexica.art) 📸

[TestCheating](/plugins/TestCheating.js) - Tells ChatGPT to help you cheat on tests 📝

Your really cool plugin - Go make a plugin, do a pull-request and I'll add it the list 🤝

## Related

Huge thanks to <a href="https://twitter.com/transitive_bs">Travis Fischer</a> for creating [chatgpt-api](https://github.com/transitive-bullshit/chatgpt-api)

## License

MIT © Gabe Ragland (follow me on <a href="https://twitter.com/gabe_ragland">Twitter</a>)
