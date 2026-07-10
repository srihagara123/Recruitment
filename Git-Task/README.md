# Git Branching and Merge Task

## Objective

This task demonstrates the basic Git workflow by creating a new branch, making changes to a file, committing those changes, and merging the branch back into the `main` branch.

---

## Repository Structure

```
.
├── CHANGELOG.md
└── README.md
```

---

## Steps Performed

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to the Project

```bash
cd <repository-folder>
```

### 3. Create a New Branch

```bash
git checkout -b feature/update-changelog
```

### 4. Update the CHANGELOG File

Added a new entry to `CHANGELOG.md` describing the latest project changes.

### 5. Stage the Changes

```bash
git add CHANGELOG.md
```

### 6. Commit the Changes

```bash
git commit -m "Update CHANGELOG.md"
```

### 7. Switch Back to Main Branch

```bash
git checkout main
```

### 8. Merge the Feature Branch

```bash
git merge feature/update-changelog
```

### 9. Push Changes to GitHub

```bash
git push origin main
```

---

## Git Commands Used

```bash
git clone
git checkout -b feature/update-changelog
git add CHANGELOG.md
git commit -m "Update CHANGELOG.md"
git checkout main
git merge feature/update-changelog
git push origin main
```

---

## Learning Outcomes

* Created and switched between Git branches.
* Modified project files in a separate branch.
* Staged and committed changes.
* Merged a feature branch into the `main` branch.
* Pushed the updated repository to GitHub.

---

## Author

**Sriha Gara**
