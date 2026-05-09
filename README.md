# Furniture App — Dev A: Foundation + Auth

## Screens phụ trách

| Màn hình | File                                  | Status  |
| -------- | ------------------------------------- | ------- |
| Boarding | `src/screens/auth/BoardingScreen.tsx` | ✅ Done |
| Login    | `src/screens/auth/LoginScreen.tsx`    | ✅ Done |
| Sign Up  | `src/screens/auth/SignupScreen.tsx`   | ✅ Done |

## Cấu trúc files Dev A tạo

```
FurnitureApp/
├── App.tsx                          ← Entry point
├── app.json                         ← Expo config
├── package.json                     ← Dependencies
├── tsconfig.json                    ← TypeScript config
│
├── src/
│   ├── theme/
│   │   ├── colors.ts                ← Màu sắc từ Figma (#1E1E1E, white...)
│   │   ├── typography.ts            ← Text styles (h1, body, button...)
│   │   ├── spacing.ts               ← Spacing scale + layout constants
│   │   └── index.ts                 ← Barrel export
│   │
│   ├── components/shared/
│   │   ├── AppText.tsx              ← Text component với variants
│   │   ├── AppButton.tsx            ← Button (primary, outline, ghost)
│   │   ├── AppInput.tsx             ← Input với label, error, show/hide password
│   │   └── SafeScreen.tsx           ← Safe area wrapper + keyboard avoidance
│   │
│   ├── navigation/
│   │   ├── types.ts                 ← TypeScript types cho tất cả navigators
│   │   ├── AuthStack.tsx            ← Boarding → Login → Signup
│   │   ├── MainTab.tsx              ← Bottom tab (Home/Favorite/Cart/Profile)
│   │   └── RootNavigator.tsx        ← Root: kiểm tra auth → vào đúng stack
│   │
│   ├── screens/auth/
│   │   ├── BoardingScreen.tsx       ← Hero image + Get Started
│   │   ├── LoginScreen.tsx          ← Email/password + validation
│   │   └── SignupScreen.tsx         ← Register form + validation
│   │
│   └── store/
│       └── authStore.ts             ← Zustand auth state
```

## Cài đặt & chạy

```bash
# 1. Cài dependencies
npm install

# 2. Chạy Expo Go
npx expo start

# 3. Scan QR bằng Expo Go app (iOS/Android)
```

## Packages quan trọng Dev B & C cần biết

```ts
// Shared components — import từ đây
import AppText from "@components/shared/AppText";
import AppButton from "@components/shared/AppButton";
import AppInput from "@components/shared/AppInput";
import SafeScreen from "@components/shared/SafeScreen";

// Theme
import { colors, spacing, typography } from "@theme";

// Navigation types
import type { TabScreenProps } from "@navigation/types";
```

## Lưu ý Dev B & C

- **Không sửa** `src/theme/`, `src/navigation/types.ts`, `src/components/shared/`
  → tạo PR nếu cần thêm gì, mention @DevA để review
- Placeholder screens trong `MainTab.tsx` → Dev B thay `HomeScreen`, `FavoriteScreen`
  → Dev C thay `CartScreen`, `ProfileScreen`
- Auth flow: sau khi login/signup thành công → gọi `useAuthStore().login(token, user)`
  → RootNavigator tự switch sang MainTab

## TODO (Dev A chưa làm)

- [ ] Kết nối API thật trong `LoginScreen` và `SignupScreen`
- [ ] Lưu token bằng `expo-secure-store`
- [ ] ForgotPassword screen
- [ ] Splash screen asset thật (thay Unsplash URL bằng local asset)
