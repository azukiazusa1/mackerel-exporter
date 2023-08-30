# OpenTelemetry Mackerel Metric Exporter

The OpenTelemetry Mackerel Metric Exporter is allow the user to send metrics to [Mackerel](https://mackerel.io/).

## Installation

```sh
# TODO
```

## Usage

```js
import {
  PeriodicExportingMetricReader,
  MeterProvider,
} from "@opentelemetry/sdk-metrics";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { Resource } from "@opentelemetry/resources";
import { MackerelExporter } from "mackerel-exporter";

const meterProvider = new MeterProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "basic-metric-service",
  }),
});

const exporter = new MackerelExporter({
  apiKey: process.env.MACKEREL_API_KEY,
});

meterProvider.addMetricReader(
  new PeriodicExportingMetricReader({
    exporter,
  }),
);

const meter = meterProvider.getMeter("example-meter");

const diceRollCounter = meter.createCounter("dice", {
  description: "Dice roll counter",
});

const dice = Math.floor(Math.random() * 6) + 1;
diceRollCounter.add(1, {
  dice: dice,
});
```

See [examples](./examples) for more details.

## Configuration

| Name | Type | Required | Description |
|------|------|------|-------------|
| `apiKey` | `string` | ◯ | Mackerel API key. |
| `compression` | `"none" \| "gzip"` | ✘ | Compression algorithm to use. |
| `headers` | `Record<string, string>` | ✘ | Additional headers to send with the request. |

## License

MIT
