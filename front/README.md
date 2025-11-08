# Linear Theme Demo

Linear.app의 디자인 시스템을 기반으로 한 재사용 가능한 컴포넌트 라이브러리입니다.

## 프로젝트 구조

```
front/
├── app/
│   ├── components/      # 컴포넌트 데모 페이지
│   │   └── page.tsx
│   ├── globals.css      # CSS 변수 및 글로벌 스타일
│   ├── layout.tsx       # 루트 레이아웃
│   └── page.tsx         # 홈 페이지
├── components/          # 재사용 가능한 컴포넌트 라이브러리
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Select.tsx
│   ├── Textarea.tsx
│   └── index.ts
└── linear-theme.json    # Linear 테마 데이터
```

## 시작하기

1. 개발 서버 실행:
```bash
npm run dev
```

2. 브라우저에서 열기:
- 홈페이지: http://localhost:3000
- 컴포넌트 데모: http://localhost:3000/components

## 컴포넌트 사용법

모든 컴포넌트는 `@/components`에서 가져올 수 있습니다:

```tsx
import {
  Button, Input, Card, Badge,
  Navbar, Footer, Hero,
  ImageCard, Carousel
} from '@/components';

function MyComponent() {
  return (
    <>
      <Navbar
        logo={<span>Logo</span>}
        items={[
          { label: "Product", href: "/product" },
          { label: "Pricing", href: "/pricing" }
        ]}
        rightContent={<Button variant="ghost">Sign In</Button>}
      />

      <Hero
        title="Welcome"
        subtitle="Build amazing things"
        actions={<Button variant="primary">Get Started</Button>}
      />

      <Card>
        <Button variant="primary">Click me</Button>
        <Input label="Username" placeholder="Enter username" />
        <Badge variant="success">Active</Badge>
      </Card>

      <Footer
        copyright="© 2024 Your Company"
        sections={[
          {
            title: "Product",
            links: [{ label: "Features", href: "/features" }]
          }
        ]}
      />
    </>
  );
}
```

## 주요 컴포넌트

### Button
- **Variants**: primary, secondary, ghost, danger
- **Sizes**: small, medium, large
- **Props**: 모든 HTML button 속성 지원

### Input
- **Props**: label, error, helperText + 모든 HTML input 속성
- **Features**: 포커스 상태, 에러 상태, 헬퍼 텍스트

### Card
- **Props**: hoverable, padding (none, small, medium, large)
- **Features**: 호버 효과, 커스터마이징 가능한 패딩

### Badge
- **Variants**: default, primary, success, warning, danger, info
- **Sizes**: small, medium, large

### Select
- **Props**: label, error, options
- **Features**: 옵션 배열로 간편한 사용

### Textarea
- **Props**: label, error, helperText + 모든 HTML textarea 속성
- **Features**: 수직 리사이즈 가능

### Navbar
- **Props**: logo, items, rightContent
- **Features**: 스크롤 시 스타일 변화, 고정 위치, 블러 효과
- **Usage**:
```tsx
<Navbar
  logo={<span>Logo</span>}
  items={[
    { label: "Product", href: "/product" },
    { label: "Pricing", href: "/pricing" }
  ]}
  rightContent={<Button>Sign In</Button>}
/>
```

### Footer
- **Props**: sections, copyright, socialLinks
- **Features**: 다단 레이아웃, 소셜 링크 지원
- **Usage**:
```tsx
<Footer
  sections={[
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" }
      ]
    }
  ]}
  copyright="© 2024 Your Company"
  socialLinks={[
    { label: "Twitter", href: "#" }
  ]}
/>
```

### Hero
- **Props**: title, subtitle, actions, image, align, size
- **Sizes**: medium, large
- **Align**: left, center
- **Features**: 이미지 지원, 유연한 레이아웃
- **Usage**:
```tsx
<Hero
  size="large"
  align="center"
  title="Welcome to Our Product"
  subtitle="Build amazing things"
  actions={
    <>
      <Button variant="primary">Get Started</Button>
      <Button variant="ghost">Learn More</Button>
    </>
  }
/>
```

### ImageCard
- **Props**: image, title, description, badge, footer, aspectRatio, hoverable, imagePosition
- **Aspect Ratios**: square, video (16:9), portrait (3:4)
- **Image Position**: top, left
- **Features**: 호버 효과, 배지 오버레이, 푸터 영역, 가로/세로 레이아웃
- **Usage**:
```tsx
<ImageCard
  image="/path/to/image.jpg"
  title="Card Title"
  description="Card description text"
  badge={<Badge variant="primary">New</Badge>}
  aspectRatio="video"
  footer={<Button size="small">Learn More</Button>}
/>

// Horizontal layout
<ImageCard
  imagePosition="left"
  aspectRatio="square"
  image="/path/to/image.jpg"
  title="Blog Post"
  description="Article description"
/>
```

### Carousel
- **Props**: children, autoPlay, interval, showDots, showArrows
- **Features**: 자동 재생, 호버 시 일시정지, 화살표 네비게이션, 도트 인디케이터
- **Usage**:
```tsx
<Carousel autoPlay interval={3000} showDots showArrows>
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
</Carousel>

// With cards
<Carousel autoPlay={false}>
  <ImageCard image="/img1.jpg" title="Slide 1" />
  <ImageCard image="/img2.jpg" title="Slide 2" />
  <ImageCard image="/img3.jpg" title="Slide 3" />
</Carousel>
```

## 디자인 시스템

이 프로젝트는 Linear.app에서 추출한 디자인 토큰을 사용합니다:

### 색상
- Background: 8단계 계층 (level-0 ~ level-3, secondary, tertiary 등)
- Text: 4단계 계층 (primary, secondary, tertiary, quaternary)
- Accent: 브랜드 색상 및 호버 상태
- Semantic: red, orange, yellow, green, blue, indigo

### 타이포그래피
- Font Family: Inter Variable (주요), Berkeley Mono (코드)
- Font Sizes: micro (0.6875rem) ~ title1 (2.25rem)
- Font Weights: 300 (light) ~ 680 (bold)

### 간격 및 레이아웃
- Border Radius: 4px ~ 32px, circle, rounded
- Shadows: none, tiny, low, medium, high
- Transitions: quick (0.1s), regular (0.25s)

## CSS 변수

모든 디자인 토큰은 CSS 변수로 사용 가능합니다:

```css
.my-element {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  border-radius: var(--radius-8);
  padding: var(--spacing-page-padding-inline);
  font-size: var(--font-size-regular);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-quick);
}
```

## 특징

- ✅ **일반화된 컴포넌트**: 재사용 가능하고 확장 가능한 컴포넌트 구조
- ✅ **중앙화된 테마**: 하나의 테마 파일로 전체 디자인 관리
- ✅ **TypeScript 지원**: 완전한 타입 안정성
- ✅ **Linear 디자인 시스템**: 실제 Linear.app의 디자인 토큰 사용
- ✅ **반응형**: 다양한 화면 크기 지원
- ✅ **접근성**: 포커스 스타일 및 키보드 탐색 지원

## 커스터마이징

테마를 커스터마이징하려면:

1. `linear-theme.json` 파일 수정
2. `app/globals.css`의 CSS 변수 업데이트
3. 컴포넌트가 자동으로 새 테마를 반영합니다

## 기술 스택

- Next.js 15
- React 18
- TypeScript
- CSS Variables
- Tailwind CSS (utility classes만 사용)
