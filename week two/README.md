# Git Workflow and Commands

This document provides a comprehensive guide to essential Git operations, including creating and managing repositories, handling branches, committing changes, and working with pull requests. Each command includes examples for better understanding.

---

## Table of Contents

1. [Creating Repositories](#creating-repositories)
2. [Cloning Repositories](#cloning-repositories)
3. [Creating Branches](#creating-branches)
4. [Committing Changes](#committing-changes)
5. [Reverting Commits](#reverting-commits)
6. [Pulling and Pushing Changes](#pulling-and-pushing-changes)
7. [Fetching Changes](#fetching-changes)
8. [Merging Branches](#merging-branches)
9. [Renaming Branches](#renaming-branches)
10. [Pull Requests](#pull-requests)

---

## 1. Creating Repositories

### Initialize a New Repository

```bash
git init
```

- Creates a new Git repository in the current directory.

### Create a New Repository on GitHub

1. Go to GitHub and click **New Repository**.
2. Fill in the repository details and click **Create Repository**.
3. Follow the provided instructions to push your local repository or clone it.

---

## 2. Cloning Repositories

### Clone a Repository

```bash
git clone <repository-url>
```

- Example:
  ```bash
  git clone https://github.com/username/repository.git
  ```

---

## 3. Creating Branches

### Create a New Branch

```bash
git branch <branch-name>
```

- Example:
  ```bash
  git branch feature-xyz
  ```

### Switch to a Branch

```bash
git checkout <branch-name>
```

- Or, use:
  ```bash
  git switch <branch-name>
  ```

### Create and Switch to a Branch Simultaneously

```bash
git checkout -b <branch-name>
```

- Example:
  ```bash
  git checkout -b feature-xyz
  ```

---

## 4. Committing Changes

### Add Changes to Staging Area

```bash
git add <file>
```

- Add all files:
  ```bash
  git add .
  ```

### Commit Changes

```bash
git commit -m "<commit-message>"
```

- Example:
  ```bash
  git commit -m "Added login feature"
  ```

---

## 5. Reverting Commits

### Revert the Last Commit

```bash
git revert HEAD
```

### Revert a Specific Commit

```bash
git revert <commit-hash>
```

### Undo Last Commit (Keep Changes in Working Directory)

```bash
git reset --soft HEAD~1
```

### Undo Last Commit (Discard Changes)

```bash
git reset --hard HEAD~1
```

---

## 6. Pulling and Pushing Changes

### Pull Changes from Remote

```bash
git pull <remote> <branch>
```

- Example:
  ```bash
  git pull origin main
  ```

### Push Changes to Remote

```bash
git push <remote> <branch>
```

- Example:
  ```bash
  git push origin main
  ```

---

## 7. Fetching Changes

### Fetch Remote Updates

```bash
git fetch <remote>
```

- Example:
  ```bash
  git fetch origin
  ```

---

## 8. Merging Branches

### Merge a Branch into Current Branch

```bash
git merge <branch-name>
```

- Example:
  ```bash
  git merge feature-xyz
  ```

### Resolve Merge Conflicts

1. Open conflicting files.
2. Edit the files to resolve conflicts.
3. Stage the resolved files:
   ```bash
   git add <file>
   ```
4. Complete the merge:
   ```bash
   git commit
   ```

---

## 9. Renaming Branches

### Rename Current Branch

```bash
git branch -m <new-branch-name>
```

### Rename a Different Branch

```bash
git branch -m <old-branch-name> <new-branch-name>
```

---

## 10. Pull Requests

### Create a Pull Request on GitHub

1. Push your branch to the remote repository:
   ```bash
   git push origin <branch-name>
   ```
2. Go to the repository on GitHub.
3. Click **Pull Requests** > **New Pull Request**.
4. Select the base branch and compare branch, then click **Create Pull Request**.

### Review a Pull Request

1. Go to the **Pull Requests** tab on GitHub.
2. Select a pull request.
3. Add comments or approve the changes.

### Merge a Pull Request

1. Select the pull request to merge.
2. Click **Merge Pull Request**.

### Revert a Pull Request

1. Go to the merged pull request.
2. Click **Revert** to create a new pull request that undoes the changes.
