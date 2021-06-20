# Welcome to devThoughts

Your new go to place for best technical short blogs, posts, tricks and tips that we call "thoughts". More precisely, "Dev thoughts".

## About devThoughts

<br/>

<img src="https://raw.githubusercontent.com/varchasvipandey/images/master/splash-1.png" alt="landing page" style="max-width: 400px; box-shadow: 0 3px 6px rgba(0,0,0,0.2); border-radius: 10px; margin-bottom: 20px"/>

devthoughts, pronounced as Dev Thoughts is a simple technical thoughts sharing platform built on top of React 17 and Google Firebase. The idea behind this app was to curate small technical blogs to improve overall knowledge sharing on programming languages, frameworks and libraries. It is a single page application where you can post and interact with other posts by developers worldwide.

<br/>

## Ideology behind the app

The app started because of a small LinkedIn challenge that I (Varchasvi) gave to myself. The challenge was to create a small yet powerful application where people can share their programming-related knowledge. Although I was able to create the MVP version in just 38 hours, I saw some potential in the application which pushed me further into adding some awesome features into it including authentication! Yes, you read it correctly, Initially, I was not planning to add any type of authentication. Then I decided to make it more professional and reliable so that, people who are seeking some knowledge and want to share some knowledge on one dedicated platform can get some real value out of it.

<br/>

## The development process

The development process through which this app is going through is super flexible and reliable. The biggest fact about this application is hidden inside its node modules folder! You can check the package.json file to understand the secret! But, if you are not in a mood for such heavy lifting, allow me to share the secret.

Except for React and its required libraries which comes pre-installed when you run create-react-app, only styled-components, firebase and UUID were installed. No other dependencies as of now have been installed! No fancy date-time manipulators, no fancy pop-up modals, component libraries, transitions/animations packs or boilerplates were installed during the process. In fact, the text editor is also written by the developer only i.e. me 😉.

<br/><br/>

# Application walkthrough

## A section from devThoughts

<br/>

<img src="https://raw.githubusercontent.com/varchasvipandey/images/master/1-about%20section.png" alt="landing page" style="max-width: 400px; box-shadow: 0 3px 6px rgba(0,0,0,0.2); border-radius: 10px; margin-bottom: 20px"/>

Yes, I understand that devThoughts isn't a language or a framework, but yes, this will stay there so you can check all the latest updates as soon as you launch the application! And since it is a growing application, do expect regular updates and new exciting features which we'll be discussing in another post 😉.

<br/>

## Search for your favourite language or framework

<br/>

<img src="https://raw.githubusercontent.com/varchasvipandey/images/master/2-basic%20navigation.png" alt="landing page" style="max-width: 400px; box-shadow: 0 3px 6px rgba(0,0,0,0.2); border-radius: 10px; margin-bottom: 20px"/>

You can try searching for a language, framework or library. If you are unable to find one then you can suggest we add a new language. This is because, I don't want to use any third-party API just to fetch a list of languages as I've already mentioned in the previous post, the use of third party dependencies is limited. If you want to add a new post on some language that is currently not there, you can force publish the thought. We will receive and review your post and language request and it will be live within a day!

But for that, you need to join the community! Let's see how.

<br/>

## How to join devThoughts

<br/>

<img src="https://raw.githubusercontent.com/varchasvipandey/images/master/3-login%201.png" alt="landing page" style="max-width: 400px; box-shadow: 0 3px 6px rgba(0,0,0,0.2); border-radius: 10px; margin-bottom: 20px"/>

By clicking on the avatar icon on the top right side of the application, you will get a prompt to join the community using either your Google account or GitHub account. (Log in using GitHub account has been temporarily disabled for now).

<br/>

<img src="https://raw.githubusercontent.com/varchasvipandey/images/master/4-login%202.png" alt="landing page" style="max-width: 400px; box-shadow: 0 3px 6px rgba(0,0,0,0.2); border-radius: 10px; margin-bottom: 20px"/>

If you are already signed in, you will see your profile image along with some basic details.

<br/>

## Interact with posts

<br/>

<img src="https://raw.githubusercontent.com/varchasvipandey/images/master/5-interact%20basics.png" alt="landing page" style="max-width: 400px; box-shadow: 0 3px 6px rgba(0,0,0,0.2); border-radius: 10px; margin-bottom: 20px"/>

With this app, I would like to introduce a new way of saying "This post is lit! 🔥". Yes, you can show love to the author by giving the post some fire! Cool, isn't it?

<br/>

## Create and manage posts

<br/>

**Create and manage posts**

<br/>

<img src="https://raw.githubusercontent.com/varchasvipandey/images/master/6-create%20post.png" alt="landing page" style="max-width: 400px; box-shadow: 0 3px 6px rgba(0,0,0,0.2); border-radius: 10px; margin-bottom: 20px"/>

All set? Looks like you are about to publish your first thought! It is simple. Click on the add button on the bottom right of the screen and start using our integrated text editor! If you are into HTML & CSS, trust me, you can do wonders!! Feel free to explore all possibilities.

<br/>

**Edit or delete a post**

<br/>

<img src="https://raw.githubusercontent.com/varchasvipandey/images/master/7-post%20edit.png" alt="landing page" style="max-width: 400px; box-shadow: 0 3px 6px rgba(0,0,0,0.2); border-radius: 10px; margin-bottom: 20px"/>

You can edit or delete your posts by simply clicking on the menu button on the top right side of the post. The drop down menu comes with these two options. But be careful, deleted posts cannot be restored!

<br/>

## Dark theme!!

<br/>

<img src="https://raw.githubusercontent.com/varchasvipandey/images/master/8-theme%20switch.png" alt="landing page" style="max-width: 400px; box-shadow: 0 3px 6px rgba(0,0,0,0.2); border-radius: 10px; margin-bottom: 20px"/>

Yes, I know this is one very important feature these days. So, here it is, to complete your dark mode needs! You can find the option by clicking on the top right avatar icon. Easy 😉

<br/>

## Contribute & connect

<br/>

<img src="https://raw.githubusercontent.com/varchasvipandey/images/master/9-get%20in%20touch.png" alt="landing page" style="max-width: 400px; box-shadow: 0 3px 6px rgba(0,0,0,0.2); border-radius: 10px; margin-bottom: 20px"/>

Feel free to DM me on LinkedIn, I would love to hear more from you! Any suggestions, comments or feedback are much appreciated. Also, don't forget to jump into the code and create some PRs that can improve this application.

<br/><br/>

# Setting app the app on local environment 

This section will help you setting up the development environment for this application. This is for both contributors and enthusiastic developers! Follow the below steps-

<br/>

- **Start by cloning the repository**

  ```
  git clone https://github.com/varchasvipandey/devThoughts.git
  ```

  <br/>

- **Install dependencies**

  ```
  npm i
  ```

  <br/>

- **Create a .env.local file in the root folder and add environment variables here** 

  ```
  REACT_APP_FIREBASE_API_KEY=YOUR_VARIABLE
  REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_VARIABLE
  REACT_APP_FIREBASE_PROJECT_ID=YOUR_VARIABLE
  REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_VARIABLE
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_VARIABLE
  REACT_APP_FIREBASE_APP_ID=YOUR_VARIABLE
  REACT_APP_FIREBASE_MEASUREMENT_ID=YOUR_VARIABLE
  NODE_ENV=development
  ```

<br/>

- **Run the application**

  ```
  npm start
  ```



<br/>

