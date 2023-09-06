import type { ExporterConfig } from "./types.js";
import { getEnv } from "@opentelemetry/core";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-grpc";
import { Metadata } from "@grpc/grpc-js";

const ENDPOINT = "otlp.mackerelio.com:4317";

export class MackerelExporter extends OTLPMetricExporter {
  /**
   * constructor
   * @param config Exporter configuration
   */
  constructor(config: ExporterConfig) {
    const env = getEnv();
    const metadata = new Metadata();
    metadata.set("Mackerel-Api-Key", config.apiKey);

    super({
      url: ENDPOINT,
      compression: (config.compression ||
        env.OTEL_EXPORTER_OTLP_COMPRESSION ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        "none") as any,
      metadata,
    });
  }
}
