import {DisplayProcessor, SpecReporter, StacktraceOption} from "jasmine-spec-reporter";
import SuiteInfo = jasmine.SuiteInfo;

class CustomProcessorextendsDisplayProcessor {
  public displayJasmineStarted(info: SuiteInfo, log: string): string {
    return `${ log } `;
  }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter({
  spec: {
    displayStacktrace: StacktraceOption.NONE
  },
  customProcessors: [CustomProcessor],
}));
