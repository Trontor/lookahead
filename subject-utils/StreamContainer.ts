import Stream from "./Stream";
import SubjectClass from "./SubjectClass";

export default class StreamContainer {
  // Stream name, e.g. Workshop, Lecture, Tutorial
  public name: string;
  public type: string;
  // List of streams
  public streams: Stream[] = [];
  /**
   * Creates a new stream container for the given type.
   * @param type The type of stream (e.g. L, T, W)
   */
  constructor(type: string) {
    this.type = type;
  }

  /**
   * Adds a class to an existing stream, or creates a new one if not existing
   */
  public addStreamClass(cls: SubjectClass) {
    // If the name has not yet been assigned, assign it based on the added class
    if (!this.name) {
      this.name = cls.description.replace(/[^A-Za-z]+/g, "");
    }
    // Checks if the stream number exists yet
    if (!this.isStreamExisting(cls.streamNumber)) {
      // If the stream doesn't exist, we create a new stream
      const newStream = new Stream(this.type, cls.streamNumber, [cls]);
      // Add the new stream to this StreamContainer's array of Streams
      this.streams.push(newStream);
    } else {
      // Otherwise, we locate the appropriate stream container and plop the new
      // class into it.
      this.streams
        .find(x => x.streamNumbers.includes(cls.streamNumber))
        .classes.splice(0, 0, cls);
    }
  }

  private isStreamExisting = (streamNumber: number): boolean =>
    this.streams.some(x => x.streamNumbers.includes(streamNumber))
}
