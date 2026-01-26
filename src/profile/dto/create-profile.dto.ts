import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateProfileDto {
    @IsNotEmpty({ message: 'First name is required' })
    @IsString({ message: 'First name must be a string' })
    @MinLength(3, { message: 'First name must be at least 3 characters long' })
    @MaxLength(50, { message: 'First name must be at most 50 characters long' })
    firstName: string;
    @IsNotEmpty({message: 'Last name is required'})
    @IsString({message: 'Last name must be a string'})
    @MinLength(3, { })
    lastName: string;
    userId: string;
    gender: number;
    dob: Date;
}
