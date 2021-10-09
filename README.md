Ready Set Write (RSW) is an app built with a Rails API backend and a React/Redux frontend.

Having spent many years writing a novel, I understand the difficulty involved in simply getting one's mind to focus on writing.  In order to get my mind trained on writing and not my phone or a myriad of other distractions, I started spending ten to fifteen minutes writing the most structurally sound sentences I could within a set time period--generally one or two minutes.  This simple exercise greatly increased my level of concentration and helped focus my mind on the task of writing.  From that came the idea for RSW.

To run RSW, clone the file.
Next, cd into rsw_api and run rails s. Go to localhost:3000/sentences.
Then, cd into rsw_client and run npm start. (You will be promoted to type Y, for yes, in order to connect to a different local server address, if the server attempts to run on localhost:3000.)
With the servers running, you can then navigate to the Home, About, or Sentences pages.  On the sentences page, you will be able to enter your desired number of timed minutes, start the countdown, and begin wrting in the space provided.  Your sentence or fragment or phrase will appear on the page when the timer reaches zero.

Happy writing!