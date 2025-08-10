Deployment Link : https://multi-step-form-fullstack.vercel.app/

NOTE:- The backend is hosted on Render, on a free tier account, therefore, the hosting goes into sleeping mode after 15 minutes of inactivity.
Kindly give the deployed app 50-60 seconds so that the backend can get active, Thank you.

1. For this Multi-step Product Form, I have used redux for Form State Management, as well as React Hook Form for managing form data at each step.

2. The Product Form renders different jsx components like (Properties,Benefits,GeneralInfo, etc) based on a step count which is defined in the redux state.

3. Redux state is saved to Local Storage on each step for persistence.

4. The overview Step is complete with Desktop and Mobile View, identical to the source pdf.

5. For Backend, I used MongoDB and node/expressJS, I used multer + Cloudinary for image uploads
6. Ive also implemented custom asyncHandler and apiError methods to standardize async code handling and error handling.

Thank You!
