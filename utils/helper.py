import os

def gerar_imports_e_tags(diretorio_local, nome_diretorio_assets):
    # Extensões de imagem comuns
    extensoes_validas = ('.jpg', '.jpeg', '.png', '.webp', '.avif')

    try:
        # Lista e ordena os arquivos para manter uma sequência lógica
        arquivos = sorted([f for f in os.listdir(diretorio_local) if f.lower().endswith(extensoes_validas)])
    except FileNotFoundError:
        print(f"Erro: O diretório '{diretorio_local}' não foi encontrado.")
        return

    imports = []
    tags = []

    for i, arquivo in enumerate(arquivos, start=1):
        # Formata o número com zero à esquerda (ex: 01, 02...)
        num = f"{i:02d}"
        var_name = f"img{num}"

        # Gera a linha de import
        # Ajuste o caminho relativo se necessário
        line_import = f'import {var_name} from "../../assets/posts/{nome_diretorio_assets}/{arquivo}";'
        imports.append(line_import)

        # Gera a tag img
        line_tag = f"<br/><img src={{{var_name}.src}} alt='Foto na fabrica' />"
        tags.append(line_tag)

    # Exibe o resultado no console
    print("--- IMPORTS ---")
    print("\n".join(imports))
    print("\n--- TAGS IMG ---")
    print("\n".join(tags))

# --- CONFIGURAÇÃO ---
# Caminho da pasta no seu computador onde estão as fotos
caminho_da_pasta = r"C:\Users\Junior\Desktop\i.frme\src\assets\posts\w12"
# Nome da pasta que aparecerá no caminho do import (ex: 'março-semana-2')
nome_slug_diretorio = r"10-11"

gerar_imports_e_tags(caminho_da_pasta, nome_slug_diretorio)