Angela Cekovska
SafeBlink_AngelaCekovska_FE21
Repository
main
safeblink_angelacekovska_fe21
README.md
Angela Cekovska's avatar
Added new screenshots to readme file
Angela Cekovska authored 9 months ago
2abafef1
README.md
3.96 KiB
# SafeBlink - Educational Web Application
This web application serves as an educational platform that helps users understand and implement safe web practices. It provides interactive content, articles, and resources to guide users through various aspects of web security and safe internet usage.
## Overwiew
- Single-page application (SPA) behavior using hash-based routing
- Modular JavaScript function handling
- REST API used for handling user authentication
- Responsive layout using CSS
- Reusable HTML templates
## Features
- **User Authentication System**
  - Login/logout functionality
  - User profile management
  - Personalized user experience
- **Interactive Content**
  - Educational articles and resources
  - Video content integration
  - Interactive discussion board
- **Responsive Design**
  - Mobile-friendly responsive style
  - Responsive layout for desktop and laptops
  - Modern and intuitive user interface
- **Content Categories**
  - Most viewed content
  - Current topics
  - Latest updates
  - Filterable content sections
## Technologies Used
### Frontend
- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap 5
### Backend
- Python
- Flask (REST API)
- User Authentication System
## Project Structure
```
├── images/                     # Image assets used in the project
├── js/                         # JavaScript files
├── templates/                  # HTML templates
├── REST-API/                   # Backend Python files (e.g., Flask app)
│   └── authenticator.py        # Main backend application file
├── styles.css                  # Main stylesheet
├── index.html                  # Main HTML file
└── README.md                   # Project documentation
```
## Key Functionalities
1. **User Authentication**
   - User authentication system
   - Session handling
2. **Content Management**
   - Dynamic content loading
   - Category-based filtering
   - Interactive cards system
3. **Interactive Features**
   - Discussion board
   - Video integration
   - Content overlay system
## Project Screenshots
### Landing Page
➡️ [View Screenshot](./screenshots/landingPage.png)
### Landing Page Mobile
➡️ [View Screenshot](./screenshots/landingPage-Mobile.png)
### Informiraj se Page
➡️ [View Screenshot](./screenshots/inform-usPage.png)
### Informiraj se Page Mobile
➡️ [View Screenshot](./screenshots/inform-usMobile.png)
### Diskusii Page
➡️ [View Screenshot](./screenshots/discussionsPage.png)
### Diskusii Page Mobile
➡️ [View Screenshot](./screenshots/discussionsPageMobile.png)
### Profile Page
➡️ [View Screenshot](./screenshots/profilePage.png)
### Profile Page Mobile
➡️ [View Screenshot](./screenshots/profilePage%20Mobile.png)
## Getting Started
1. Clone this repository
2. Set up the backend: In order to enable the login functionality, you need to set up the REST-API locally. For this, you need to have Python installed. The version of python which was used for developing the application is 3.12.3. After that in your terminal or command prompt navigate to the REST-API folder inside the project directory by typing:
   ```sh
     cd REST-API
   ```
3. Activate virtual environment: Before installing dependencies, activate the Python virtual environment. The command depends on your operating system:
- On macOS/Linux:
  ```sh
  source venv/bin/activate
  ```
- On Windows (Command Prompt):
  ```sh
  venv\Scripts\activate
  ```
- On Windows (PowerShell):
  ```sh
  .\venv\Scripts\Activate.ps1
  ```
4. Install the flask library and/or the flask_cors by running these commands:
   ```sh
     pip install flask
     pip install  flask_cors
   ```
5. To run the API by typing:
   ```sh
    python '.\REST-API\authenticator.py'
   ```
6. For confirming that the authenticator REST API is up-and-running, you should see that the Flask server is running on http://127.0.0.1:5000.
## Credits
- **Design**: Provided by Brainster
- **Icons**:
  - From provided Figma Design
  - Font Awesome

