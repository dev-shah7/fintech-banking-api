import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @Matches(/^\+?[1-9]\d{1,14}$/) // Example for international phone number validation
  @IsNotEmpty()
  readonly phone_number: string;

  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2}$/) // Example for YYYY-MM-DD format
  @IsNotEmpty()
  readonly registration_date: string;
}
