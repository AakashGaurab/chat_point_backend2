# chat_point_backend
Chat Point is a user-friendly platform that allows individuals to communicate with each other in real-time via text-based messaging. It offers various features, such as the ability to create groups.

The application is available across different platforms, including mobile and desktop, and provides a seamless and secure communication experience. With its intuitive interface and robust functionality, your chat application aims to simplify communication and enhance social connectivity.

Deployment
Front-End: https://incredible-selkie-67b697.netlify.app/signup.html

Back-End: https://chatpointbackend2-production-56db.up.railway.app/

Technology we used
HTML
CSS
JavaScript
MongoDB
Node JS
Express JS
Our Team Members
Aakash Gaurab
Vipin Kumar
Shradha Vastrakar
Parimal Paramanik
Rahul Gupta
Login and Signup page (fw23_0771)
The login and signup page is a sleek and modern design that is perfect for any web application. The page features a clean and minimalistic design, with a focus on user experience. The use of soft colors and clear text makes it easy for users to navigate and quickly find what they are looking for.

Screenshot (171)

Screenshot (172)

Chat Page
The chat page is another example of a well-designed web application. The page features a clean and minimalist design that is perfect for chatting with friends or colleagues. The use of soft colors and simple icons creates a relaxed and inviting atmosphere, encouraging users to stay and chat.

Our chat app allows users to create a personalized chat room and invite others to join the conversation. This feature enables users to have a private chat with their friends, family, or colleagues, without the need to create a separate group chat. Users can choose a room name, and invite other users to join.

Screenshot (172)

Screenshot (172)

Admin Page
The admin page is a powerful tool for managing your web application. The page features a comprehensive set of tools and options that allow you to manage users, content, and settings with ease. The design of the page is professional and functional, with a focus on usability and efficiency. Whether you are managing a small blog or a large e-commerce site, the admin page is an essential tool for keeping your web application running smoothly.

Email:"admin@gmail.com", Password:"admin"
Screenshot (172)

Admin Side Routes:
Get all users: This route is a GET request that retrieves all users and returns them as a response. The route path is /admin/read.
Create new admin: This route is a POST request that creates a new admin. The name, email, and password of the new admin are passed in the request body. The route path is /admin/create.
Update a user from user role to admin: This route is a PUT request that updates a user's role from user to admin. The email of the user is passed in the request body. The route path is /admin/update.
Delete a user: This route is a DELETE request that deletes a user. The email of the user to be deleted is passed in the request body. The route path is /admin/delete.
User Side Routes:
Welcome user: This route is a GET request that welcomes the user. It is mainly used to test if the user is authenticated and authorized. The route path is /user/.
Register or sign up: This route is a POST request that registers a new user. The name, email, and password of the new user are passed in the request body. The route path is /user/register.
Login: This route is a POST request that logs in a user. The email and password of the user are passed in the request body. The route path is /user/login.
Logout: This route is a GET request that logs out a user. The token is passed in the request headers. The route path is /user/logout.
Generate new token: This route is a GET request that generates a new token for the user. The refresh token is passed in the request headers. The route path is /user/newtoken.
Links:
Deployed Backend Link: https://chatpointbackend2-production-56db.up.railway.app/

Deployed Frontend Link: https://incredible-selkie-67b697.netlify.app/signup.html

Swagger Documentation Link: http://localhost:3500/api-docs/
