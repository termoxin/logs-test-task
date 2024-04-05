## Log Viewer Application

### Overview

This project is a simple log viewer application designed to display large log data (1GB) with a user-friendly interface. The application is built using the Express.js, React.js, Node.js stack. It provides real-time log streaming functionality and allows users to toggle automatic scrolling.

### Features

- Display large log data at boot time.
- Enable automatic scrolling to the bottom of logs by default.
- Toggle automatic scrolling with a small button.
- Real-time log updates as new data is appended.
- Memory consumption limited to 512MB.
- Backend built with Node.js and Express.js.
- Frontend built with React.js.
- Data transfer between backend and frontend using Socket.IO.

Sure! Here's the technical todo list formatted in Markdown:

### Server Side Technical Things to Improve:

1. **Error Handling:**

   - [ ] Implement try-catch blocks or error middleware to handle exceptions gracefully.
   - [ ] Log errors to a dedicated error log file or external logging service for easier debugging.

2. **Validation:**

   - [ ] Implement input validation using libraries like `express-validator` to validate file paths, request parameters, and body data.
   - [ ] Sanitize inputs to prevent XSS and SQL injection attacks.

3. **Security Headers:**

   - [ ] Set security headers like `X-XSS-Protection`, `X-Content-Type-Options`, and `Content-Security-Policy` to mitigate common web vulnerabilities.

4. **Logging:**

   - [ ] Utilize a logging library like Winston to log server activities, errors, and warnings with appropriate log levels.
   - [ ] Include timestamps and request identifiers in log entries for better traceability.

5. **Environment Configuration:**

   - [ ] Externalize configuration settings such as file paths, ports, and CORS origins to environment variables.
   - [ ] Use a configuration management tool like `dotenv` to load environment variables from `.env` files.

6. **Graceful Shutdown:**

   - [ ] Implement shutdown hooks to gracefully close server connections and perform cleanup tasks before shutting down the server.
   - [ ] Handle SIGINT and SIGTERM signals to initiate the shutdown process.

7. **File Streaming Optimization:**
   - [ ] Tune file streaming settings like chunk size and buffer size to optimize performance.
   - [ ] Implement backpressure handling to prevent overwhelming the client with data.

### Client Side Technical Things to Improve:

1. **Error Handling:**

   - [ ] Implement error boundaries to catch and handle errors at the component level.
   - [ ] Display meaningful error messages to users in case of network errors or other failures.

2. **Data Validation:**

- [ ] Validate data received from the server to ensure it's in the expected format before processing or rendering.
  - [ ] Use schema validation libraries like `yup` for client-side data validation.

3. **Component Decomposition:**

   - [ ] Refactor large components into smaller, reusable components based on their functionality.
   - [ ] Follow the single responsibility principle to keep components focused on specific tasks.

4. **Performance Optimization:**

   - [ ] Memoize expensive computations or function calls using `useMemo` or `React.memo`.
   - [ ] Implement virtualization techniques like windowing or pagination for large datasets to improve rendering performance.

5. **State Management:**

   - [ ] Evaluate whether the application needs centralized state management using Redux or Context API.
   - [ ] Refactor components to lift state up and improve data flow where necessary.

6. **Security Measures:**

   - [ ] Implement input validation and sanitization for user inputs to prevent XSS and CSRF attacks.
   - [ ] Use libraries like `DOMPurify` to sanitize HTML content before rendering it in the UI.

7. **Code Splitting:**

   - [ ] Identify code chunks that can be split into separate bundles based on route or functionality.
   - [ ] Use dynamic import() or React.lazy() for code splitting and lazy loading of components.

8. **Accessibility:**
   - [ ] Ensure all UI elements have appropriate labels and alternative text for screen readers.
   - [ ] Use semantic HTML elements and ARIA attributes to enhance accessibility for users with disabilities.

By addressing these technical tasks, you can improve the quality, security, and performance of both the server-side and client-side components of your application.

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies for both client and server:

```bash
cd client
npm install

cd ../server
npm install
```

3. Set up environment variables (if necessary) and configure the server accordingly.

### Running the Application

1. Start the server:

```bash
cd server
npm start
```

2. Start the client:

```bash
cd client
npm start
```

3. Access the application through a web browser at `http://localhost:3000`.

### Usage

- Upon accessing the application, logs will be displayed with automatic scrolling enabled by default.
- Click the toggle button to switch automatic scrolling on or off.
- New log data will be appended in real-time.

### License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

### Author

This project was created by [termoxin](https://github.com/termoxin).

### Contributions

Contributions are welcome. Feel free to open issues or submit pull requests to contribute to this project.
