1) Install Dependencies:

        npm install
        
2) Database Configuration:

        - change variables at /config/environment.js to match local database setup (username, password, port)
        
        - A mysql file 'order.sql' is included. Execute it and the database and tables will be created (this was just for testing, you can create your own).

3) Executing:

        start server: npm start
        restart server: npm restart
        monitor logs: pm2 logs
        
4) addresses:

        front-end: '/'
        back-end (admin): '/admin'
        
