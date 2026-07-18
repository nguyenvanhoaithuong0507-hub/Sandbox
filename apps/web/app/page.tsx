import Link from "next/link";

import Grid from "../components/layout/Grid";
import Logo from "../components/brand/Logo";
import Drawer from "../components/navigation/Drawer";
import Hamburger from "../components/navigation/Hamburger";
import UserMenu from "@/components/auth/UserMenu";

const docsSections = [
  {
    eyebrow: "01 · Start here",
    title: "Mobile-first IDE workspace",
    description:
      "Thiết kế lại trang docs theo phong cách OpenClaw: hero tập trung, cards rõ ràng, điều hướng nhanh và tương thích màn hình nhỏ.",
    href: "/repositories",
  },
  {
    eyebrow: "02 · Runtime",
    title: "Sandbox execution layer",
    description:
      "Theo dõi trạng thái runtime, terminal, artifacts và task queue trong một luồng làm việc ổn định cho AI agent.",
    href: "/runtime",
  },
  {
    eyebrow: "03 · Automation",
    title: "Production workflow",
    description:
      "Checklist bảo mật, CI/CD, database, auth và tối ưu hiệu năng được gom thành roadmap có thể triển khai từng bước.",
    href: "/settings",
  },
];

const priorities = [
  "Critical: khóa secrets, validate API input, thêm error boundary cho auth/runtime.",
  "High: chuẩn hóa dashboard responsive, loading states, empty states và toast feedback.",
  "Medium: bổ sung cache repository, timeline events, planner và audit logs.",
  "Low: tinh chỉnh motion, microcopy, docs onboarding và brand assets.",
];

export default function Home() {
  return (
    <>
      <Grid />
      <Drawer />

      <main className="docsShell">
        <header className="topbar" aria-label="Primary navigation">
          <Hamburger />
          <Logo />
          <UserMenu />
        </header>

        <section className="heroCard">
          <div className="heroPill">SandboxCodeX IDE · Mobile Web Docs</div>
          <h1>Build, review, and ship AI-powered sandbox projects.</h1>
          <p>
            Workspace này đã được chuyển sang trải nghiệm docs hiện đại: rõ ngữ cảnh,
            dễ điều hướng, responsive và sẵn sàng mở rộng thành sản phẩm production-grade.
          </p>

          <div className="heroActions" aria-label="Quick actions">
            <Link className="primaryAction" href="/repositories">
              Open repositories
            </Link>
            <Link className="secondaryAction" href="/console">
              Launch console
            </Link>
          </div>
        </section>

        <section className="sectionHeader" aria-labelledby="workflow-title">
          <span>Architecture workflow</span>
          <h2 id="workflow-title">Tự động hóa theo từng lớp sản phẩm</h2>
        </section>

        <div className="docsGrid">
          {docsSections.map((section) => (
            <Link className="docCard" href={section.href} key={section.title}>
              <span>{section.eyebrow}</span>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </Link>
          ))}
        </div>

        <section className="priorityPanel" aria-labelledby="priority-title">
          <div>
            <span className="panelEyebrow">Autonomous task plan</span>
            <h2 id="priority-title">Ưu tiên sửa lỗi và nâng cấp</h2>
            <p>
              Kế hoạch này giúp phát hiện crash, loading vô hạn, responsive lỗi,
              API/auth lỗi, dependency conflict và security issue trước khi deploy.
            </p>
          </div>

          <ol>
            {priorities.map((priority) => (
              <li key={priority}>{priority}</li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
}
