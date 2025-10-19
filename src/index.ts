#!/usr/bin/env node
import { Command } from "commander";
import path, { join } from "path";
import os from "os";
import { writeFile } from "fs/promises";
import { formatDate } from "./helper/formatDate.js";
import { getPrimaryTitle } from "./helper/getPrimaryTitle.js";
import { getLayout } from "./helper/getLayout.js";
const program = new Command();
const diaryPath = path.join(os.homedir(), "diary");
const routinesPath = path.join(diaryPath, "routines");
program
  .command("new")
  .description("creates a new diary entry")
  .action((options) => {
    const currentDate = new Date();
    const yearNumber = formatDate(currentDate, { year: "numeric" });
    const monthNumber = formatDate(currentDate, { month: "numeric" });
    const dayNumber = formatDate(currentDate, { day: "numeric" });
    const fileName = `${dayNumber}${monthNumber}${yearNumber}.md`;

    const month = formatDate(currentDate, { month: "long" }).toLowerCase();
    const fileTitle = formatDate(currentDate, { dateStyle: "full" });
    const title = getPrimaryTitle(fileTitle);
    const data = getLayout({ title });
    writeFile(join(diaryPath, yearNumber, month, fileName), data);
  });
program.parse(process.argv);
