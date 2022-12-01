# Fetch Rewards Take Home Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Information

You can run this app on your own machine by [cloning it](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository), running the `npm i` command to install all node packages while in the project's directory via the terminal, then by running the `npm start` script in that same terminal. This command will run the app in development mode, and open [http://localhost:3000](http://localhost:3000) so you can view it in your browser.

This app was built using [Styled Components](https://styled-components.com/), which lets us keep our components neater by grouping necessary elements together, while also styling them with CSS. There's documentation in the index.js file of each subfolder explaining the export structure.

You can also see a working example of this form deployed on Vercel here: https://fr-tht.vercel.app/

## Possible Package Error:

You may encounter an error related to the bcryptjs npm package used in this app to hash passwords. 

This error will read: 

<pre>
        <code>
                WARNING in ./node_modules/bcryptjs/dist/bcrypt.js 64:13-45
                Module not found: Error: Can't resolve 'crypto' in 'E:\Code Stuff\fr-tht\node_modules\bcryptjs\dist'

                BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.     
                This is no longer the case. Verify if you need this module and configure a polyfill for it.     

                If you want to include a polyfill, you need to:
                        - add a fallback 'resolve.fallback: { "crypto": require.resolve("crypto-browserify") }' 
                        - install 'crypto-browserify'
                If you don't want to include a polyfill, you can use an empty module like this:
                resolve.fallback: { "crypto": false }
        </code>
</pre>

To solve this error, after you've installed the node_modules on your local machine, go to node_modules/bcryptjs and find the package.json file. 

Then, change the "browser" entry on line 30 of the package.json file from `"browser": "dist/bcrypt.js"` to `"browser": {"crypto": false}`
