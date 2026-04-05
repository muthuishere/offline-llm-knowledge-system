# Sample Document

## Introduction

This is a sample markdown document used as a test fixture for the local-llm-import-export application. It contains typical markdown elements including headings, lists, and paragraphs.

## Key Features

- Supports multiple document types including PDF, DOCX, Markdown, and plain text
- Uses hybrid search combining vector similarity and full-text matching
- Runs entirely offline after initial knowledge base import
- Stores knowledge in the browser's Origin Private File System (OPFS)

## How It Works

The application processes documents by parsing them into plain text, chunking the text into overlapping segments of 512 tokens with a 64-token overlap, and generating embedding vectors for each chunk using the bge-small-en-v1.5 model.

These vectors are stored in an Orama index that supports both vector and full-text search queries. The entire knowledge base, including the chat model, is packaged into a self-contained zip file for offline use.
