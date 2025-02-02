# Changelog

## [v1.0.0] - 2025-02-02

### Added

1. **New Dependencies Added:**

    - `axios` (version `^1.7.9`)
    - `react-spinners` (version `^0.15.0`)
    - `react-toastify` (version `^11.0.3`)

2. **New Components:**

    - `AddressBox.jsx`: Handles address-related functionalities.
    - `ToolTip.jsx`: Displays hints on elements.
    - `PrivateRoute.jsx`: Restricts data visibility to specific roles.
    - `ProtectedRoute.jsx`: Restricts data access to authorized users.

3. **New Layouts:**

    - `UserDashboardLayout.jsx`: Holds the static parts of the user dashboard.

4. **New Hooks:**

    - `useApi.jsx`: Manages API requests.

5. **New Pages:**

    - `ForgotPassword.jsx`: A multi-step page for restoring user passwords.
    - `Addresses.jsx`: Manages address-related functionalities.

6. **New Services:**

    - `api.services.js`: Handles API requests using `axios`.
    - `token.service.js`: Manages token-related functionalities.
    - `auth.service.js`
    - `blog.service.js`
    - `cart.service.js`
    - `category.service.js`
    - `comment.service.js`
    - `order.service.js`
    - `product.service.js`
    - `seller.service.js`
    - `user.service.js`

7. **New Configs:**

    - `api.config.js`: Configures server request settings.
    - `toast.config.js`: Configures toast notification settings.

8. **New SVG Assets:**

    - `add-white.svg`
    - `minus-white.svg`

9. **Main Features Integrated:**
    - Fully connected the following pages to the backend:
        - `ForgotPassword.jsx`
        - `UserDashboard.jsx`
        - `Login.jsx`
        - `SignUp.jsx`
        - `Home.jsx`
        - `Product.jsx`
    - Partial backend integration for `Cart.jsx` (all features except finalizing the shop).

### Changed

1. **Updated Dependencies:**

    - Upgraded `vite` from version `^6.0.1` to `6.0.9`.

2. **Updated Components:**

    - `CustomButton.jsx`: Now includes a loading state using `react-spinners`.
    - `CustomIconButton.jsx`: Updated similarly to `CustomButton.jsx`.
    - `CustomInput.jsx`: Integrated with `react-hook-form` for improved form handling.
    - `DualRangeSlider.jsx`: Now works with `react-hook-form` and URL parameter state management.
    - `CartItem.jsx`: Modified to support updated props and API configurations.
    - `CommentItem.jsx`: Enhanced for better structure when fetching and displaying user comments.

3. **Updated Contexts:**
    - `UserAuthContext.jsx`: Improved user state management and backend connectivity.

### Removed

-   _No features or components were removed in this release._

### Commit Summary

-   **Deployment & Configuration:**
    -   Prepared the project for deployment, updated build configurations, and refreshed Tailwind configurations.
-   **Bug Fixes:**
    -   Resolved issues in the image slider, fixed responsiveness issues in the user dashboard, and addressed token refresh bugs.
-   **Feature Additions:**
    -   Integrated multiple pages (e.g., product, home, login, signup) with the backend.
    -   Added new components, hooks, services, and configurations to enhance project functionality.
-   **Refactoring:**
    -   Improved user dashboard routing and updated various components for scalability.

### Detailed Commit Logs

55f9018 - chore: ready project for deploy (Amin Gharibi, 2025-02-02)<br/>
bd28c90 - fix: fix problems in image slider of products page (Amin Gharibi, 2025-02-01)<br/>
1943e5c - feat: connect product page to backend (Amin Gharibi, 2025-02-01)<br/>
6522736 - feat: connect home page to backend (Amin Gharibi, 2025-02-01)<br/>
1cccb63 - fix: fix verify email section in uesr dashboard responsive (Amin Gharibi, 2025-02-01)<br/>
beeef69 - feat: create my orders tab in user dashboard and delete additional features from user dashboard (Amin Gharibi, 2025-01-31)<br/>
4872be8 - refactor && feat: refactor my info page of user dashboard's structure and also connect profile photo section to backend (Amin Gharibi, 2025-01-30)<br/>
780f686 - feat: create email verification section and connect it to backend and fix issues in update profile section (Amin Gharibi, 2025-01-30)<br/>
b75291f - feat && chore: add logout feature and change redirecting routes in login and signup page (Amin Gharibi, 2025-01-30)<br/>
772529d - feat: create forgot password page and connect it to backend (Amin Gharibi, 2025-01-30)<br/>
f133ab5 - feat: create user addresses section in user dashboard and connect it to backend (Amin Gharibi, 2025-01-30)<br/>
af2d2ee - feat: create tooltip component (Amin Gharibi, 2025-01-30)<br/>
1ef86d2 - feat: create useApi hook (Amin Gharibi, 2025-01-30)<br/>
e67acf7 - feat: add get address by id function in user services (Amin Gharibi, 2025-01-30)<br/>
8234211 - fix: fix bug in refresh token function of token services (Amin Gharibi, 2025-01-30)<br/>
14ac688 - fix: fix bugs in auth system (Amin Gharibi, 2025-01-29)<br/>
3c3c2bf - chore: update vite (Amin Gharibi, 2025-01-29)<br/>
fef9cd1 - feat: connect info page of user dashboard to backend (Amin Gharibi, 2025-01-28)<br/>
50e94c0 - refactor: refactor user dashboard routing (Amin Gharibi, 2025-01-28)<br/>
9ad8227 - feat: add private route and protected route components (Amin Gharibi, 2025-01-28)<br/>
70076a3 - feat && chore: update header component to handle logged in state and change missing imports in api services (Amin Gharibi, 2025-01-28)<br/>
272ea57 - feat: connect sign up page to backend (Amin Gharibi, 2025-01-27)<br/>
c7deb18 - feat: connect login page to backend (Amin Gharibi, 2025-01-27)<br/>
fad1e53 - chore: update toast configs (Amin Gharibi, 2025-01-27)<br/>
ed54c29 - chore: update tailwind config (Amin Gharibi, 2025-01-27)<br/>
db0f818 - feat: update customButton component to handle loading and disable states (Amin Gharibi, 2025-01-27)<br/>
1a1af80 - chore: add react-spinners package (Amin Gharibi, 2025-01-27)<br/>
cbb79a1 - feat: add user auth context (Amin Gharibi, 2025-01-27)<br/>
83257c9 - [feat] add user services (Amin Gharibi, 2025-01-26)<br/>
db86a08 - [feat] add seller services (Amin Gharibi, 2025-01-26)<br/>
7a9e957 - [feat] add product services (Amin Gharibi, 2025-01-26)<br/>
7c067f4 - [feat] add order services (Amin Gharibi, 2025-01-26)<br/>
0bd7cd4 - [feat] add comment services (Amin Gharibi, 2025-01-26)<br/>
8882248 - [feat] add category services (Amin Gharibi, 2025-01-26)<br/>
c07390e - [feat] add cart services (Amin Gharibi, 2025-01-26)<br/>
1a934a9 - [feat] add blog services (Amin Gharibi, 2025-01-26)<br/>
19955f7 - [feat] create all auth services (Amin Gharibi, 2025-01-26)<br/>
3e9491a - [feat] create basic services (Amin Gharibi, 2025-01-26)<br/>
fe5e2e0 - [chore] add axios package to project (Amin Gharibi, 2025-01-26)<br/>
87ec597 - [chore] configure api services (Amin Gharibi, 2025-01-26)<br/>
2b6add4 - [chore]: configure react-toastify (Amin Gharibi, 2025-01-26)<br/>
0e7e708 - [chore]: add react-toastify package (Amin Gharibi, 2025-01-26)<br/>
7e19c3a - [refactor]: change inputs system to be more scalable (Amin Gharibi, 2025-01-26)<br/>
