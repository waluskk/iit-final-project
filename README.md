## Main task objective

### The Problem
Students frequently deal with long lecture transcripts or piles of notes. Manually reviewing these texts takes a lot of time, homework deadlines and exam dates are easy to miss.

### The Solution
We have designed an automated **Transcript Analyzer** pipeline using **n8n** and **Generative AI**. 
This system eliminates the need for manual review by transforming raw text into a prettier and easier to read summary.

### How It Works
1.  **Input:** The user submits a raw transcript via a web form.
2.  **AI Processing:** An AI model analyzes the text to:
    * Generate a concise **Summary** of the topics discussed.
    * Extract specific **Action Items** (e.g., assignments, projects).
    * Identify **Deadlines and Dates** (e.g., "Exam on Friday at 9 AM").
3.  **Output:** The system automatically:
    * Delivers a structured summary report to the user.
    * **Creates .ics events possible to import into your calendar** for every deadline found, ensuring no task is overlooked.

### Automation Goal
To demonstrate how an intelligent workflow can convert unstructured data (text) into immediate utility (summaries and calendar synchronization) without human intervention.