// This should be the entry point for any typescript code

// Any namespace should be imported and exported.
import { custom } from './components/test-component';
export { custom };

// Main logic
document.addEventListener('DOMContentLoaded', () => {
  const testComponent = new custom.TestComponent();
  testComponent.init();
});
