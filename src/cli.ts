#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createFiles() {
    try {
        const rootPath = process.cwd();

        // Correct template paths
        const templatePath = path.join(
            __dirname,
            "templates"
        );

        const readmeSource = path.join(
            templatePath,
            "README.md"
        );

        const prSource = path.join(
            templatePath,
            "PULL_REQUEST_TEMPLATE.md"
        );

        // Destination paths
        const readmeDestination = path.join(
            rootPath,
            "README.md"
        );

        const githubPath = path.join(
            rootPath,
            ".github"
        );

        await fs.ensureDir(githubPath);

        const prDestination = path.join(
            githubPath,
            "PULL_REQUEST_TEMPLATE.md"
        );

        // Copy files
        await fs.copy(readmeSource, readmeDestination);

        await fs.copy(prSource, prDestination);

        console.log("Files created successfully");
    } catch (error) {
        console.error("Error creating files");
        console.error(error);
    }
}

createFiles();