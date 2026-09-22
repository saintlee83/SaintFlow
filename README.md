# SaintFlow

SaintFlow is an Obsidian vault for capture, organization, knowledge, recall, execution, and review.

This workspace uses `C:\Users\saint\Downloads\SaintFlow_vault\SaintFlow` as its baseline, imported on 2026-09-22. Start at [Home](Home.md), or read the [SaintFlow Manual](9_System/SaintFlow%20Manual.md) for the workflow, properties, and templates.

## Open the vault

1. Open this repository folder as a vault in Obsidian. Restart Obsidian if it was already open during migration.
2. Open `Home`. The bookmarks link to all six stage dashboards.
3. From a note in editing mode, open the command palette (`Ctrl/Cmd+P`) and search for `SF`.

Templater 2.25.1 is bundled and enabled in this vault's community plugin configuration. It requires Obsidian 1.13.0 or newer. If Obsidian opens the vault in Restricted mode, enable community plugins to use the commands. The `saintflow` CSS snippet, core plugins, property types, daily notes, and template folders are configured.

## Commands

| Command | Action |
| --- | --- |
| `SF 새 항목` | Create an item and record its relationship to the current note. |
| `SF 보내기` | Move an inbox note to its destination and apply its template. |
| `SF 회상 시작` | Prepare today's recall questions and answer spaces. |
| `SF 회상 판정` | Record a recall result and update its review interval. |
| `SF Weekly` | Open or create this week's review. |
| `SF 프로젝트 종료` | Open or create a project's closing review. |

Commands appear under `Templater: Insert 9_System/Commands/…`. Regular note templates are in `9_System/Templates`; command implementations are in `9_System/Scripts`.

## Migration

All 47 source files were imported unchanged. The previous SaintFlow plugin, dashboards, templates, and design documents that were superseded by this baseline were moved out of the active vault. The existing `P-OWOP` project note and local Obsidian workspace were preserved unchanged.

The local pre-migration backup is `C:\Users\saint\Documents\work\SaintFlow-backups\before-vault-migration-20260922\vault`, with a SHA-256 inventory in the parent folder. Git history is preserved. Empty workflow folders contain `.gitkeep` files so they also exist in fresh checkouts.

Templater is distributed under its included [GNU AGPL v3 license](.obsidian/plugins/templater-obsidian/LICENSE). The bundled files come from the [official 2.25.1 release](https://github.com/SilentVoid13/Templater/releases/tag/2.25.1); its corresponding source is available at that release tag.
