---
title: speech to md
date: 2024-11-12
tags: [self]
draft: false
---

# i want to post

a few months ago, i quickly threw together a personal site using astro in hopes of reducing friction for writing and posting blog posts. i have things set up such that adding a markdown document to the github repo for this site automatically gets it gets built and deployed as a new blog post.

apparently this didnt reduce friction enough, as evidenced by the fact that i still havent actually posted anything yet. still, putting my thoughts and ideas here is something i want to do, so i’ve been thinking of ways to make it even easier.

# i am lazy

i don't usually have time to sit down at a full-size keyboard to write, and typing on a phone keyboard is excruciatingly slow. as such, voice transcription was an intriguing option for me since it’s hands-free and easily accessible (as long as i have my phone).

in pursuit of this, i decided to try playing around with iphone shortcuts. this is (in my opinion) a criminally underutilized tool in ios, and something i want to experiment with more in general.

over the weekend, i created an iphone shortcut that does the following:

1. start voice transcription

2. paste the transcribed text into a new note for later reference

3. send the text to chatgpt with a prompt asking it to format as markdown and correct anything it thinks is a transcription error

4. take that markdown from the chatgpt response and append it to the original note for comparison

5. open the note

there are some hiccups with this workflow, most notably that voice transcription seems to have a character limit or a timeout (it will randomly stop listening and proceed to the next step). this post took two runs through this workflow to complete. there are probably workarounds i can try to mitigate this issue, but i haven't dug into it yet.

# it's fun to do things differently

overall, i'm happy with how this workflow. it worked reasonably well for writing this post. only time will tell what effect it will have going forward on reducing the friction in posting. if you have an iphone and want to try this yourself, you can load the shortcut i created [here](https://www.icloud.com/shortcuts/12b60c96a1c64b5d9f0a65742e73ad81).
