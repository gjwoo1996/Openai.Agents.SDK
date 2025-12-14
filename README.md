# Openai.Agents.SDK

## 프로젝트 구조
- Mono Repo  
    하나의 레포지토리에서 두개의 프로젝트를 관리

    - MonoRepo 설정 
        ``` typescript
        # React에서 build된 결과물을 정적 서빙으로 실행

        npm install @nestjs/serve-static 

        import { Module } from '@nestjs/common';
        import { ServeStaticModule } from '@nestjs/serve-static';
        import { join } from 'path';

        @Module({
        imports: [
            ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'frontend', 'dist'),
            }),
        ],
        controllers: [],
        providers: [],
        })
        export class AppModule {}

        ```

## NestJS

- 명령어
    - 프로젝트 생성
        ```cli
        # 프로젝트 생성
        nest new backend -g (git skip)
        ```


### 의존성 관리

- Root 경로
    ```text
    각각의 서비스에서 의존성을 관리하되,
    공통으로 사용하는 의존성 및 스크립트는 Root경로에서 관리
    ```
- 의존성 설치시 주의점
    ```
    의존성을 나누어 관리하기 편하기 위해서 --workspace=(서비스명)으로 설치한다.
    ```