export interface Data {
  name: string;
  questions: string[];
  headers: string[];
  results: {
    min: number;
    max: number;
    message: string;
  };
}
