# Node.js Example

This example demonstrates how to use the Mackerel Exporter to export metrics.

## Prerequisites

Node.js 16 or later is required to run this example.

## Running the Example

1. Install dependencies:

    ```sh
    npm install
    ```

1. Set environment variables
  
      ```sh
      touch .env
      echo MACKEREL_API_KEY="YOUR_API_KEY" >> .env
      ```

1. Run the example:

    ```sh
    npm start
    ```

1. View the metrics in Mackerel: