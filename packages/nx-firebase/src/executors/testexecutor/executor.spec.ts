import { TestexecutorExecutorSchema } from './schema';
import executor from './executor';

const options: TestexecutorExecutorSchema = {};

describe('Testexecutor Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});