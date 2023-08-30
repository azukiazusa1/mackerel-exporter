import { describe, it, expect } from "vitest";
import { MackerelExporter } from "./mackerel.js";

describe("MackerelExporter", () => {
  it("should construct an exporter", () => {
    const exporter = new MackerelExporter({
      apiKey: "DUMMY_API_KEY",
      compression: "gzip",
    });

    expect(typeof exporter.export).toBe("function");
    expect(typeof exporter.shutdown).toBe("function");
  });

  // FIXME: how to test this?
  it.todo("should export metrics to Mackerel");
});
