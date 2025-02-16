# Tailwind CSS - Styles Not Applying

This repository demonstrates a common issue where Tailwind CSS fails to pick up styles from components.  The problem is due to an incomplete `content` array in the Tailwind configuration file.  The solution shows how to properly configure the `content` array to include all relevant source files.

## Issue

When styles are not applied after setting up Tailwind CSS, double check if all source files containing Tailwind directives are correctly specified in the `content` array of your `tailwind.config.js` file.  If not, then Tailwind will not process those files. The bug showcases this exact scenario.

## Solution

Ensure that all directories and file types containing Tailwind classes are included in the `content` array. The solution file provides a corrected `tailwind.config.js` file.