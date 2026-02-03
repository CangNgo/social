import { ApiProperty } from "@nestjs/swagger";
import {
    IsNotEmpty,
    IsString,
    MinLength,
    IsEmail,
    IsInt,
    IsDateString,
    Matches,
    Min,
    Max,
} from "class-validator";

export class SignUpDTO {
    @ApiProperty({
        description: "Username",
        example: "fsocial123",
        minLength: 6,
    })
    @IsString({ message: "INVALID_USERNAME" })
    @IsNotEmpty({ message: "REQUIRED_USERNAME" })
    @MinLength(6, { message: "INVALID_USERNAME" })
    userName: string;

    @ApiProperty({
        description: "Password",
        example: "Fsocial@123",
        minLength: 8,
    })
    @IsString()
    @IsNotEmpty({ message: "REQUIRED_PASSWORD" })
    @MinLength(8, { message: "Password must be at least 8 characters long" })
    password: string;

    @ApiProperty({
        description: "Email address",
        example: "user@example.com",
    })
    @IsString()
    @IsNotEmpty({ message: "REQUIRED_EMAIL" })
    @IsEmail({}, { message: "INVALID_EMAIL" })
    email: string;

    @ApiProperty({
        description: "First name",
        example: "John",
    })
    @IsString()
    @IsNotEmpty({ message: "REQUIRED_USERNAME" })
    firstName: string;

    @ApiProperty({
        description: "Last name",
        example: "Doe",
    })
    @IsString()
    @IsNotEmpty({ message: "REQUIRED_USERNAME" })
    lastName: string;

    @ApiProperty({
        description: "Date of birth (YYYY-MM-DD)",
        example: "1990-01-01",
        format: "date",
    })
    @IsNotEmpty({ message: "Date of birth is required" })
    @IsDateString({}, { message: "Invalid date format. Use YYYY-MM-DD" })
    dob: string;

    @ApiProperty({
        description: "Gender (0 = Female, 1 = Male)",
        example: 1,
        minimum: 0,
        maximum: 1,
    })
    @IsInt({ message: "Gender must be an integer" })
    @Min(0, { message: "Gender must be 0 or 1" })
    @Max(1, { message: "Gender must be 0 or 1" })
    gender: number;
}
