import { SubjectClass } from "./SubjectClass";

/**
 * Represents a collection of classes that operate together as a stream
 */
export class Stream {
  // A list of stream numbers that occur concurrently
  public streamNumbers: number[];
  constructor(
    public readonly type: string,
    streamNumber: number,
    public readonly classes: SubjectClass[]
  ) {
    this.streamNumbers = [streamNumber];
  }
}
