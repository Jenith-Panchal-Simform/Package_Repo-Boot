# Repo Boot 

Initialize your project instantly with a default README.md and GitHub Pull Request template.

## Why Repo Boot?

Every time I started a new project, I had to:

- manually create a `README.md`
- copy-paste the same PR template from another project
- create `.github` folder repeatedly

So I built **Repo Boot** to automate this setup.

---

## Features

- Creates `README.md` automatically  
- Creates `.github/PULL_REQUEST_TEMPLATE.md`  
- Helps standardize repository setup  
- Simple CLI-based workflow  
- Built with TypeScript

---

## Installation

```bash
npm install repo-boot
```

---

## Usage

Run:

```bash
npx repo-boot
```

This creates:

```txt
README.md
.github/
 ┗ PULL_REQUEST_TEMPLATE.md
```

inside your current project folder.

---

## Example

Before:

```txt
my-project/
```

After running:

```bash
npx repo-boot
```

Result:

```txt
my-project/
 ┣ README.md
 ┗ .github/
    ┗ PULL_REQUEST_TEMPLATE.md
```

---

## Tech Stack

- TypeScript
- Node.js
- tsup
- fs-extra
- chalk

---

## Author

Jenith Panchal

---

## npm Package

https://www.npmjs.com/package/repo-boot