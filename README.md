# Notes SPA

A simple Single Page Application for managing notes, built with Angular.

## Functional Features
* **CRUD Operations:** Create, Read, Update, and Delete notes.
- **Priority System:** Categorization of notes by priority levels (Low, Medium, High).
- **Data Persistence:** Uses `LocalStorage` for client-side data storage.
- **Navigation:** Routing between the list view and the edit/create forms.

## Technical Implementation
- **Angular Signals:** Used for state management and reactive data updates.
- **Reactive Forms:** Implemented for note creation and editing with basic validation.
- **Dependency Injection:** Uses the `inject()` function for service integration.
- **Custom Pipe:** `TitleСutterPipe` for handling long strings in the UI.
- **Custom Directive:** `PriorityHighlightDirective` for conditional styling based on priority.
- **Architecture:** Service-based logic separation from UI components.

## Tech Stack
- **Framework:** Angular 
- **Language:** TypeScript
- **Styling:** SCSS, Bootstrap
- **Storage:** Browser LocalStorage 

## Setup and Installation
1. Clone the repository:

```bash
   git clone [https://github.com/Marko-Programmer/notes-spa.git](https://github.com/your-username/notes-spa.git)
```

2. Install dependencies:
```bash
npm install
```

3. Run the application:
```bash
ng serve
```

4. Navigate to http://localhost:4200/

