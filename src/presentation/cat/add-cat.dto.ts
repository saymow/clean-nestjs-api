import { Length, Max, Min } from 'class-validator';

export class AddCatDTO {
  @Length(3, 36)
  public readonly name: string;

  @Min(0)
  @Max(30)
  public readonly age: number;

  @Length(3, 36)
  public readonly breed: string;
}
