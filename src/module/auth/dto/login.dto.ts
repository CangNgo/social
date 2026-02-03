import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDTO {
    @ApiProperty({
        description: "Username",
        example: "fsocial123",
    })
    @IsString({ message: "Username must be a string" })
    @IsNotEmpty({ message: "Username is required" })
    @MinLength(6, { message: "Username must be at least 6 characters long" })
    userName: string;

    @ApiProperty({
        description: "Password",
        example: "fsocial123",
    })
    @IsString({ message: "Password must be a string" })
    @IsNotEmpty({ message: "Password is required" })
    @MinLength(8, { message: "Password must be at least 8 characters long" })
    password: string;
}
