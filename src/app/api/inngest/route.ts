import { serve } from "inngest/next";
import {inngest} from "@/inngest/client";
import { projectPublish } from "@/inngest/functions/project-publish";
import { projectBuild } from "@/inngest/functions/project-build";
import { projectPreviewRecovery } from "@/inngest/functions/project-preview-recovery";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [projectBuild,projectPreviewRecovery,projectPublish],
});