# Store

To make json description: https://www.freeformatter.com/json-escape.html

# Description Elements

## DiscordWidget

This is a simple Discord widget, but simplefied

The widget must be enabled in your discord server, and you need the server id

Usage

```html
<discordwidget token="835191866315505734" />

<!-- Switch between themes -->
<discordwidget token="835191866315505734" theme="dark|light" />

<!-- Change width and height -->
<discordwidget token="835191866315505734" width="500" height="350" />
```

## Video and Audio

This element more easier to understand than the normal video tag

Usage

```html
<video src="/pages/videos/hellow.mp4"></video>

<!-- Play YouTube videos -->
<video type="video/youtube" src="https://youtu.be/IDviIp15V5Q"></video>

<!-- You can also do this with only yt vid id -->
<video type="video/youtube" src="IDviIp15V5Q"></video>
```
