# ACCESS CONTROL
The module encryption AES GCM for [NestJS framework](https://nestjs.com/).

## Installation

npm: 
```bash
npm i @nestrx/access-control
```
yan
```bash
yan add @nestrx/access-control
```

## Configure


app.module.ts
```ts
...
@Module({
	...
	imports: [
		...
		AccessControlModule,
		...
	],
	...
})
...
```

## Usage

your.controller.ts

```ts
...
@Controller('route')
export class YourController{

	@Get()
	@Role() // default user role
	action(@Query() query: any): string{
		// todo something
	}
	@Post()
	@Role('admin')
	adminAccess(@Body() data: any, @User('id') accessBy: string): string{
		// todo something
	}
}
...
```

