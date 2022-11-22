# git-auto-deploy

## ABOUT

This is a simple program made for people who have routers behind a ISP Nat which doesn't allow incoming connections

## Why

I made this as my ISP has blocked incoming connections and i m unable to receive webhooks from github which is the preferred approach for most open source software

# Setup

Copy `.env.example` to `.env` and configure the `TOKEN` to be the token for the discord bot which can be created [here](https://discord.com/developers/applications),

`GUILDID` To the ID of the discord guild

`CHAN` set to the id of the discord channel which receives the github webhooks

# Configuring config.json

Insert your github repositories url (Make sure they have the ending slash) and absolute paths of them on your machine

```
{
    "https://github.com/arnav7633/repo1/" : "/home/user/Documents/repo1"
}
```
