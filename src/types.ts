export interface ExporterConfig {
  /**
   * Mackerel API key
   */
  apiKey: string;

  /**
   * Compression algorithm to use.
   */
  compression?: "none" | "gzip";

  /**
   * Headers to be sent when exporting telemetry
   * @default {}
   */
  headers?: Record<string, string>;
}
