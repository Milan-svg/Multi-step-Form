Deployment Link : https://multi-step-form-fptt.vercel.app/

1. For this Multi-step Product Form, I have used redux for Form State Management, as well as React Hook Form for managing form data at each step.

2. Redux state is saved to Local Storage on each step for persistence.

3. The overview Step is complete with Desktop and Mobile View, identical to the source pdf.

4. Since this is a Frontend Assignment, I used blob image urls for rendering images in the Overview Sections, and since blob urls clear out on refresh, i added a useEffect that clears redux state for image blob urls on refresh. So, the images go away on a refresh/re-render.

5. I have used indexes as key for iterating over items in Overview section, because since this is a Frontend only assignment, I did not have a \_id key to use. I'll fix this when I add a backend and the full-stack version.

6. The Product Form renders different jsx components like (Properties,Benefits,GeneralInfo, etc) based on a step count which is defined in the redux state.

7. I could not finalise Product List component fully, therefore i have added a simple UI with dummy Product Data. I'll soon make it dynamic when i add the Backend.

Thank You!
