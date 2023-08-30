import { DiagConsoleLogger, DiagLogLevel, diag } from "@opentelemetry/api";
import {
  PeriodicExportingMetricReader,
  MeterProvider,
} from "@opentelemetry/sdk-metrics";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { Resource } from "@opentelemetry/resources";
import { config } from "dotenv";
import { MackerelExporter } from "mackerel-exporter";
config();
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

const meterProvider = new MeterProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "basic-metric-service",
  }),
});

const exporter = new MackerelExporter({
  // eslint-disable-next-line no-undef
  apiKey: process.env.MACKEREL_API_KEY,
});

meterProvider.addMetricReader(
  new PeriodicExportingMetricReader({
    exporter,
    // exporter: new ConsoleMetricExporter(),
    exportIntervalMillis: 1000,
  }),
);

const meter = meterProvider.getMeter("example-exporter-collector");

const diceRollCounter = meter.createCounter("dice", {
  description: "Dice roll counter",
});

setInterval(() => {
  const dice = Math.floor(Math.random() * 6) + 1;
  diceRollCounter.add(1, {
    dice: dice,
  });

  console.log(`Rolling a ${dice}`);
}, 1000);
